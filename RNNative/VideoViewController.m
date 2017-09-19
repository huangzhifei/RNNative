//
//  VideoViewController.m
//  RNNative
//
//  Created by eric on 2017/9/19.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "VideoViewController.h"
#import <RCTRootView.h>

@interface VideoViewController ()

@end

@implementation VideoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSURL *jsCodeLocation;
    
#ifdef DEBUG
    //开发的时候用，需要打开本地服务器
    //真面调试的话，要让手机和电脑处于同一个路由下面，并且使用电脑端的ip地址
    //jsCodeLocation = [NSURL URLWithString:@"http://10.1.17.92:8081/index.ios.bundle?platform=ios&dev=true"];
    //localhost是使用模拟器调试的
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
#else
    //发布APP的时候用
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"jsbundle"];
#endif

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"RNVideoTest"
                                                 initialProperties:nil //将native数据传送到RN中
                                                     launchOptions:nil];

    rootView.frame = CGRectInset([UIScreen mainScreen].bounds, 32, 70);
    self.view.backgroundColor = [UIColor greenColor];
    //    [self.view addSubview:rootView];
    self.view = rootView;

}

@end
