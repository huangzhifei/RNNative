//
//  RNRootViewController.m
//  RNNative
//
//  Created by eric on 2017/9/7.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "RNRootViewController.h"
#import <RCTRootView.h>

@interface RNRootViewController ()

@end

@implementation RNRootViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSURL *jsCodeLocation;
    
#ifdef DEBUG
    //开发的时候用，需要打开本地服务器
//    jsCodeLocation = [NSURL URLWithString:@"http://10.1.17.92:8081/index.ios.bundle?platform=ios&dev=true"];
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
#else
    //发布APP的时候用
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"jsbundle"];
#endif

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"RNNative"
                                                 initialProperties:nil //将native数据传送到RN中
                                                     launchOptions:nil];

    rootView.frame = CGRectInset([UIScreen mainScreen].bounds, 32, 70);
    self.view.backgroundColor = [UIColor greenColor];
//    [self.view addSubview:rootView];
    self.view = rootView;
}

@end
