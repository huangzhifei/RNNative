//
//  Crop.h
//  RNNative
//
//  Created by eric on 2017/9/19.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void (^PickSuccess)(NSDictionary *resultDict);
typedef void (^PickFailure)(NSString *message);

@interface Crop : NSObject <UIImagePickerControllerDelegate, UINavigationControllerDelegate>

@property (nonatomic, copy) PickSuccess pickSuccess;
@property (nonatomic, copy) PickFailure pickFailure;
@property (nonatomic, strong) UIViewController *viewController;
@property (nonatomic, strong) NSMutableDictionary *response;

- (instancetype)initWithViewController:(UIViewController *)vc;

- (void)selectImage:(NSDictionary *)option success:(PickSuccess)success failure:(PickFailure)failure;

@end
