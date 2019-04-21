const Singletone = (function singletoneBuilder() {
    const PREFIX = '';
    // Created Data or playList and init instance state
    // ////////////
    let playList = [];
    
    let instance = null;
  
    return class {
  
      // Constructor will generate instance if needed it.
      // ///////////
      constructor() {
        if (!instance) {
          instance = this;
        }
        return instance;
      }
  
      // Getter, will be updated data.
      // ///////
      get data() {
        return playList;
      }
  
      get dataNew() {
        return newPlayList;
      }
  
      // This method will set Data on LocalStorage.
      // ///////////
      updateStorage() {
        try {
          const defaultJSONList = JSON.stringify(playList);
          const newJSONList = JSON.stringify(newPlayList);
          localStorage.setItem(PREFIXDefaultStorage, defaultJSONList);
          localStorage.setItem(PREFIXCreatedStorage, newJSONList);
        } catch (error) {
          console.error(error);
        }
      }
  
      // This method will get Stored Data on LocalStorage.
      // ////////////
      getStorage() {
        try {
          const defaultData = localStorage.getItem(PREFIXDefaultStorage);
          const createdData = localStorage.getItem(PREFIXCreatedStorage);
          const defaultParsedData = JSON.parse(defaultData);
          const createdParsedData = JSON.parse(createdData);
          if (defaultParsedData && Array.isArray(defaultParsedData) && defaultParsedData.length && createdParsedData && Array.isArray(createdParsedData) && createdParsedData.length){
            playList = defaultParsedData;
            newPlayList = createdParsedData;
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
}());