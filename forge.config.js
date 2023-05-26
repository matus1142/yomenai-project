module.exports = {
  packagerConfig: {
    icon: __dirname +"/yomenai.ico",
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: __dirname +"/yomenai.ico",
        iconUrl: __dirname +"/yomenai.ico",
        loadingGif: __dirname +"/loading.gif",
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {

      },
    },
  ],
};
