# AppBridge

AppBridge is a module that allows packing a React app into a desktop application.
It provides functions and information to the app,
enabling it to adapt to different environments, like a desktop app, web app or multiple platforms.

# Use Case
Consider a styled app like Discord, which should function as both a desktop and a web app.
The desktop version requires a custom title bar and window frame,
while the web version uses the browser's default UI elements.
AppBridge helps manage these differences.

# Features
- Environment detection
- Window control
- Dev mode
- Event handling
- File Access (basic wrapper)
- IPC (basic wrapper)
- ...

### Environment Detection
AppBridge detects the environment the app is running in,
and provides the app with the necessary information to adapt to it.

### Window Control
AppBridge provides functions to control the window, like close, minimize, maximize, etc.

### Dev Mode
AppBridge allows the app to run in development mode,
where it can simulate the desktop environment in a web browser.

# Example Usage
What we use AppBridge for in AffixUI and AffixApp:

At the moment we aren't really sure if we want to pack AffixUI only into an Electron app,
or if we want to have a web version as well. Even if we decide to go with the Electron app,
we might prefer a WailsV3 App over an Electron App.

Without AppBridge we would have to implement the window control and environment detection for each platform.
AppBridge acts as a middleman between the app and the platform, providing the necessary information and functions.
Allowing us to develop a standard React Web App, using AppBridge to adapt it to different platforms.

The implementations then have to implement the AppBridge functions,
and the app can use them without having to worry about the platform.

In case of a web version, the AppBridge would have no backend implementation and AffixUI
can be distributed as is without any changes.

In case of a desktop version, the AppBridge would have a backend implementation,
like Close Window, Minimize Window, Maximize Window, etc.

This makes our Pipeline more flexible by allowing us to use git submodules to include AffixUI
in the AffixApp repository, and only have to implement the AppBridge for the platform we want to support.
In theory once the Implementation is stable, we can just listen to submodule updates and build and release the app,
without having to touch the AffixUI within the AffixApp repository and without touching the AffixApp repository.
Making this like a build react to desktop app pipeline.

In a sense it is like using different compilers to compile the same code for different platforms.
Where the Implementation is the compiler, the AppBridge is the standard library and the code is the app.

# A word of caution
AppBridge aims to provide a standard interface for the app to interact with the platform.
It is not a one-size-fits-all solution, and the implementation might have to be adjusted for each platform.
It might also create all sorts of problems, etc.

Last of all, AppBridge is in early development and is not yet ready for production use.