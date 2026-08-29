# HydraPlus Android — APK route

> Fork of [astra1dev/MalumMenu-Android](https://github.com/astra1dev/MalumMenu-Android) + [Mouhamed7676/HydraPlus](https://github.com/Mouhamed7676/HydraPlus) features. Original PC Hydra by MrDiamond64.

An Among Us cheat menu for Android via **Frida** (`frida-il2cpp-bridge` + `objection patchapk`), not BepInEx `winhttp.dll`.

**Where it lives on Android (you remembered correctly):**
- APK is `com.innersloth.spacemafia` (replaces original — must uninstall original first, or use `com.mrd.hydraplus` if you change `package` in `AndroidManifest.xml`)
- After install, configs/logs go to `Android/data/com.innersloth.spacemafia/files/` (or `.../BepInEx/config/` if you use BepInEx Android). The floating icon needs `SYSTEM_ALERT_WINDOW` (Display over other apps).

**Features ported from HydraPlus PC 2.2.7:** RevealVotes Sicko instant + skips + anon colored, RigRoles before round, Host kill while crewmate, Judge without tasks, Tasks tab, Zoom/Freecam/Tracers, etc. — see PC README for full list.

## Install (APK route, root not required, no emulator)

1. Download `HydraPlus-Android.apk` from [Releases](https://github.com/Mouhamed7676/HydraPlus-Android/releases/latest) and install.

2. Grant **Display over other apps** when asked — icon appears top-left. `Insert` on PC = tap icon on Android.

## Build from source (APK route, original build)

```sh
git clone https://github.com/Mouhamed7676/HydraPlus-Android
cd HydraPlus-Android
python -m venv .venv; source .venv/bin/activate
pip install -r requirements.txt
npm install
pip install gplaydl
gplaydl download com.innersloth.spacemafia -a arm64 -o data/split
# APKEditor
java -jar APKEditor.jar m -i data/split -o data/merged.apk
java -jar APKEditor.jar d -i data/merged.apk -o data/edited
# add to AndroidManifest.xml: <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
java -jar APKEditor.jar b -i data/edited -o data/build.apk
npm run build:release
objection patchapk -c objection.cfg.json -s data/build.apk -l dist/agent.js -a arm64-v8a -V 17.17.0
adb install -i com.android.vending data/build.objection.apk
```

See upstream [MalumMenu-Android README](https://github.com/astra1dev/MalumMenu-Android#readme) for Listen Mode.

## Disclaimer
Not affiliated with Innersloth. Use only in private lobbies.
