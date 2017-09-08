//
//  ViewController.m
//  RNNative
//
//  Created by eric on 2017/9/7.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "ViewController.h"
#import "RNRootViewController.h"

@interface ViewController ()

@property (nonatomic, strong) UIButton *RNButton;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.title = @"RNApp";
    self.view.backgroundColor = [UIColor whiteColor];
    self.RNButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [self.RNButton setTitle:@"jump to react native page" forState:UIControlStateNormal];
    self.RNButton.frame = CGRectMake(65, 200, 200, 40);
    [self.RNButton addTarget:self action:@selector(jumpRN:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:self.RNButton];
}

- (void)jumpRN:(UIButton *)sender {
    RNRootViewController *RNRootVC = [[RNRootViewController alloc] init];
    [self.navigationController pushViewController:RNRootVC animated:YES];
}

@end
