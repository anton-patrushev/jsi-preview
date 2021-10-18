#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(JsiPreview, NSObject)

+ (BOOL)requiresMainQueueSetup {
    return false;
}

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
