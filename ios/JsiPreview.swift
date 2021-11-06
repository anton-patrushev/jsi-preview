@objc(JsiPreview)
class JsiPreview: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        for _ in 0...1000000 {}
        
        resolve(a*b)
    }
}
