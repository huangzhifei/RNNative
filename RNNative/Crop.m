//
//  Crop.m
//  RNNative
//
//  Created by eric on 2017/9/19.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "Crop.h"
#import <AssetsLibrary/AssetsLibrary.h>

@interface Crop ()

@property (nonatomic, strong) NSDictionary *option;

@end

@implementation Crop

- (instancetype)initWithViewController:(UIViewController *)vc {
    if (self = [super init]) {
        self.viewController = vc;
    }
    return self;
}

- (void)selectImage:(NSDictionary *)option success:(PickSuccess)success failure:(PickFailure)failure {
    self.option = option;
    self.pickSuccess = success;
    self.pickFailure = failure;
    UIImagePickerController *pickerContrller = [[UIImagePickerController alloc] init];
    pickerContrller.delegate = self;
    pickerContrller.allowsEditing = YES;
    pickerContrller.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    [self.viewController presentViewController:pickerContrller animated:YES completion:nil];
}

#pragma mark picker delegate

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<NSString *, id> *)info {
    UIImage *image = [info objectForKey:@"UIImagePickerControllerEditedImage"];
    image = [self scaleToSize:image
                         size:CGSizeMake([[self.option objectForKey:@"aspectX"] integerValue],
                                         [[self.option objectForKey:@"aspectY"] integerValue])];
    if (image) {
        [self writeToFileWithImage:image
                            outPut:[self getTempFile:[self getFileName:info]]
                           handler:^(NSString *path) {
                               [picker dismissViewControllerAnimated:YES completion:nil];
                               self.pickSuccess(@{ @"imageUrl" : path });
                           }];

    } else {
        self.pickFailure(@"获取照片失败");
        [picker dismissViewControllerAnimated:YES completion:nil];
    }
}

- (UIImage *)scaleToSize:(UIImage *)image size:(CGSize)size {
    UIGraphicsBeginImageContext(size);
    [image drawInRect:CGRectMake(0, 0, size.width, size.height)];
    UIImage *endImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return endImage;
}

- (void)writeToFileWithImage:(UIImage *)image outPut:(NSString *)imagePath handler:(void (^)(NSString *path))handler {
    NSData *data = UIImageJPEGRepresentation(image, 1);
    [data writeToFile:imagePath atomically:YES];
    dispatch_async(dispatch_get_main_queue(), ^{
        handler(imagePath);
    });
}

- (NSString *)getTempFile:(NSString *)fileName {
    NSString *imageContent = [[NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) objectAtIndex:0]
        stringByAppendingString:@"/temp"];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if (![fileManager fileExistsAtPath:imageContent]) {
        [fileManager createDirectoryAtPath:imageContent withIntermediateDirectories:YES attributes:nil error:nil];
    }
    return [imageContent stringByAppendingPathComponent:fileName];
}

- (NSString *)getFileName:(NSDictionary *)info {
    NSString *fileName;
    NSString *tempFileName = [[NSUUID UUID] UUIDString];
    fileName = [tempFileName stringByAppendingString:@".jpg"];
    return fileName;
}

@end
