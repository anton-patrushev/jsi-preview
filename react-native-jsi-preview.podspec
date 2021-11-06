require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-jsi-preview"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "11.0" }
  s.source       = { :git => "https://github.com/anton-patrushev/react-native-jsi-preview.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift}", "cpp/**/*.{c,cpp,h,hpp}"
  
  s.public_header_files = 'ios/JsiPreview-Bridging-Header.h'
  s.requires_arc = true

  s.dependency "React"
  s.dependency "React-Core"
  s.dependency "React-jsi"
end
