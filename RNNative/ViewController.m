//
//  ViewController.m
//  RNNative
//
//  Created by eric on 2017/9/7.
//  Copyright © 2017年 Formax. All rights reserved.
//

#import "ViewController.h"
#import "RNRootViewController.h"
#import "FlexViewController.h"
#import "PositionViewController.h"
#import "LayoutViewController.h"
#import "VideoViewController.h"
#import "PhotoViewController.h"
#import "BlinkViewController.h"
#import "PizzaTranslatorViewController.h"
#import "ListViewController.h"
#import "FadeViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.title = @"RNApp";
    self.view.backgroundColor = [UIColor whiteColor];
}

- (IBAction)styleTap:(id)sender {
    RNRootViewController *RNRootVC = [[RNRootViewController alloc] init];
    [self.navigationController pushViewController:RNRootVC animated:YES];
}

- (IBAction)flexTap:(id)sender {
    FlexViewController *vc = [[FlexViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)positionTap:(id)sender {
    PositionViewController *vc = [[PositionViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)layoutTap:(id)sender {
    LayoutViewController *vc = [[LayoutViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)videoTap:(id)sender {
    VideoViewController *vc = [[VideoViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)photoTap:(id)sender {
    PhotoViewController *vc = [[PhotoViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)blinkTap:(id)sender {
    BlinkViewController *vc = [[BlinkViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)textInputTap:(id)sender {
    PizzaTranslatorViewController *vc = [[PizzaTranslatorViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)listViewTap:(id)sender {
    ListViewController *vc = [[ListViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)fadeViewTap:(id)sender {
    FadeViewController *vc = [[FadeViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

@end
