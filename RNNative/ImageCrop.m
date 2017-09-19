//
//  ImageCrop.m
//  RNNative
//
//  Created by eric on 2017/9/19.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "ImageCrop.h"
#import "Crop.h"

@interface ImageCrop()

@property (nonatomic, strong) Crop *crop;

@end

@implementation ImageCrop

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(selectWithCrop:(NSInteger)aspectX
               aspectY:(NSInteger)aspectY
               resolve:(RCTPromiseResolveBlock)resolve
               rejecte:(RCTPromiseRejectBlock)reject) {
    
    UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
    while (root.presentedViewController != nil) {
        root = root.presentedViewController;
    }
    
    NSString *aspectXStr = [NSString stringWithFormat:@"%ld", aspectX];
    NSString *aspectYStr = [NSString stringWithFormat:@"%ld", aspectY];
    [[self _crop:root] selectImage:@{@"aspectX":aspectXStr,
                                    @"aspectY":aspectYStr}
                           success:^(NSDictionary *resultDict) {
                               resolve(resultDict);
                           } failure:^(NSString *message) {
                               reject(@"fail", message, nil);
                           }];
}

- (Crop *)_crop:(UIViewController *)vc {
    if (self.crop == nil) {
        self.crop = [[Crop alloc] initWithViewController:vc];
    }
    return self.crop;
}


@end
