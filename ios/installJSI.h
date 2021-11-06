#include <jsi/jsi.h>
#include "multiply.h"

namespace JSI {
  void installJSI(facebook::jsi::Runtime &rt) {
    auto globalObject = rt.global();

    facebook::jsi::PropNameID functionName = facebook::jsi::PropNameID::forAscii(rt, "multiply");
    size_t functionParamsCount = 2;

    auto functionLambda = [](
      facebook::jsi::Runtime &runtime,
      const facebook::jsi::Value &thisValue,
      const facebook::jsi::Value *arguments,
      size_t count) {
        int a = arguments[0].getNumber();
        int b = arguments[1].getNumber();

        int result = example::multiply(a, b);

        return facebook::jsi::Value(result);
      };

    facebook::jsi::Function function = facebook::jsi::Function::createFromHostFunction(rt, functionName, functionParamsCount, functionLambda);
      
    globalObject.setProperty(rt, functionName, function);
  }
}
