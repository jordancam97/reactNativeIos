import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import GoogleMaps 

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "finovaAppSupervisores"
    self.dependencyProvider = RCTAppDependencyProvider()

    // inicializa google maps con la api key
    GMSServices.provideAPIKey("AIzaSyAo6_L2Z9A727HJKIU0K4PrrBelPUcIEdA") // reemplaza _YOUR_API_KEY_ con tu api key

    // puedes agregar tus props iniciales aquí
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
