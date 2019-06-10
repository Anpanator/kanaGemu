const ALL_KANA = {
    hiragana: {
        monographs: {
            "あ" : ["a"],
            "い" : ["i"],
            "う" : ["u"],
            "え" : ["e"],
            "お" : ["o"],
            "か" : ["ka"],
            "き" : ["ki"],
            "く" : ["ku"],
            "け" : ["ke"],
            "こ" : ["ko"],
            "さ" : ["sa"],
            "し" : ["shi"],
            "す" : ["su"],
            "せ" : ["se"],
            "そ" : ["so"],
            "た" : ["ta"],
            "ち" : ["chi"],
            "つ" : ["tsu"],
            "て" : ["te"],
            "と" : ["to"],
            "な" : ["na"],
            "に" : ["ni"],
            "ぬ" : ["nu"],
            "ね" : ["ne"],
            "の" : ["no"],
            "は" : ["ha", "wa"], //the latter as particle
            "ひ" : ["hi"],
            "ふ" : ["fu"],
            "へ" : ["he", "e"], //the latter as particle
            "ほ" : ["ho"],
            "ま" : ["ma"],
            "み" : ["mi"],
            "む" : ["mu"],
            "め" : ["me"],
            "も" : ["mo"],
            "や" : ["ya"],
            "ゆ" : ["yu"],
            "よ" : ["yo"],
            "ら" : ["ra"],
            "り" : ["ri"],
            "る" : ["ru"],
            "れ" : ["re"],
            "ろ" : ["ro"],
            "わ" : ["wa"],
            "を" : ["wo"],
            "ん" : ["n"]
        },
        monographs_diacritics: {
            "が" : ["ga"],
            "ぎ" : ["gi"],
            "ぐ" : ["gu"],
            "げ" : ["ge"],
            "ご" : ["go"],
            "ざ" : ["za"],
            "じ" : ["ji"],
            "ず" : ["zu"],
            "ぜ" : ["ze"],
            "ぞ" : ["zo"],
            "だ" : ["da"],
            "ぢ" : ["ji", "dji", "jyi"],
            "づ" : ["dzu", "zu"],
            "で" : ["de"],
            "ど" : ["do"],
            "ば" : ["ba"],
            "び" : ["bi"],
            "ぶ" : ["bu"],
            "べ" : ["be"],
            "ぼ" : ["bo"],
            "ぱ" : ["pa"],
            "ぴ" : ["pi"],
            "ぷ" : ["pu"],
            "ぺ" : ["pe"],
            "ぽ" : ["po"]
        },
        digraphs: {
          "きゃ" : ["kya"],
          "きゅ" : ["kyu"],
          "きょ" : ["kyo"],
          "しゃ" : ["sha"],
          "しゅ" : ["shu"],
          "しょ" : ["sho"],
          "ちゃ" : ["cha"],
          "ちゅ" : ["chu"],
          "ちょ" : ["cho"],
          "にゃ" : ["nya"],
          "にゅ" : ["nyu"],
          "にょ" : ["nyo"],
          "ひゃ" : ["hya"],
          "ひゅ" : ["hyu"],
          "ひょ" : ["hyo"],
          "みゃ" : ["mya"],
          "みゅ" : ["myu"],
          "みょ" : ["myo"],
          "りゃ" : ["rya"],
          "りゅ" : ["ryu"],
          "りょ" : ["ryo"]
        },
        digraphs_diacritics: {
          "ぎゃ" : ["gya"],
          "ぎゅ" : ["gyu"],
          "ぎょ" : ["gyo"],
          "じゃ" : ["ja"],
          "じゅ" : ["ju"],
          "じょ" : ["jo"],
          "びゃ" : ["bya"],
          "びゅ" : ["byu"],
          "びょ" : ["byo"],
          "ぴゃ" : ["pya"],
          "ぴゅ" : ["pyu"],
          "ぴょ" : ["pyo"]
        },
        obsolete: {
          "ゐ" : ["wi"],
          "ゑ" : ["we"],
          "ぢゃ" : ["ja"],
          "ぢゅ" : ["ju"],
          "ぢょ" : ["jo"],
        }
    },
    katakana: {
      monographs: {
          "ア" : ["a"],
          "イ" : ["i"],
          "ウ" : ["u"],
          "エ" : ["e"],
          "オ" : ["o"],
          "カ" : ["ka"],
          "キ" : ["ki"],
          "ク" : ["ku"],
          "ケ" : ["ke"],
          "コ" : ["ko"],
          "サ" : ["sa"],
          "シ" : ["shi"],
          "ス" : ["su"],
          "セ" : ["se"],
          "ソ" : ["so"],
          "タ" : ["ta"],
          "チ" : ["chi"],
          "ツ" : ["tsu"],
          "テ" : ["te"],
          "ト" : ["to"],
          "ナ" : ["na"],
          "ニ" : ["ni"],
          "ヌ" : ["nu"],
          "ネ" : ["ne"],
          "ノ" : ["no"],
          "ハ" : ["ha"],
          "ヒ" : ["hi"],
          "フ" : ["fu"],
          "ヘ" : ["he"],
          "ホ" : ["ho"],
          "マ" : ["ma"],
          "ミ" : ["mi"],
          "ム" : ["mu"],
          "メ" : ["me"],
          "モ" : ["mo"],
          "ヤ" : ["ya"],
          "ユ" : ["yu"],
          "ヨ" : ["yo"],
          "ラ" : ["ra"],
          "リ" : ["ri"],
          "ル" : ["ru"],
          "レ" : ["re"],
          "ロ" : ["ro"],
          "ワ" : ["wa"],
          "ヲ" : ["wo"],
          "ン" : ["n"]
      },
      monographs_diacritics: {
          "ガ" : ["ga"],
          "ギ" : ["gi"],
          "グ" : ["gu"],
          "ゲ" : ["ge"],
          "ゴ" : ["go"],
          "ザ" : ["za"],
          "ジ" : ["ji"],
          "ズ" : ["zu"],
          "ゼ" : ["ze"],
          "ゾ" : ["zo"],
          "ダ" : ["da"],
          "ヂ" : ["ji"],
          "ヅ" : ["zu"],
          "デ" : ["de"],
          "ド" : ["do"],
          "バ" : ["ba"],
          "ビ" : ["bi"],
          "ブ" : ["bu"],
          "ベ" : ["be"],
          "ボ" : ["bo"],
          "パ" : ["pa"],
          "ピ" : ["pi"],
          "プ" : ["pu"],
          "ペ" : ["pe"],
          "ポ" : ["po"]
      },
      digraphs: {
        "キャ" : ["kya"],
        "キュ" : ["kyu"],
        "キョ" : ["kyo"],
        "シャ" : ["sha"],
        "シュ" : ["shu"],
        "ショ" : ["sho"],
        "チャ" : ["cha"],
        "チュ" : ["chu"],
        "チョ" : ["cho"],
        "ニャ" : ["nya"],
        "ニュ" : ["nyu"],
        "ニョ" : ["nyo"],
        "ヒャ" : ["hya"],
        "ヒュ" : ["hyu"],
        "ヒョ" : ["hyo"],
        "ミャ" : ["mya"],
        "ミュ" : ["myu"],
        "ミョ" : ["myo"],
        "リャ" : ["rya"],
        "リュ" : ["ryu"],
        "リョ" : ["ryo"]
      },
      digraphs_diacritics: {
        "ギャ" : ["gya"],
        "ギュ" : ["gyu"],
        "ギョ" : ["gyo"],
        "ジャ" : ["ja"],
        "ジュ" : ["ju"],
        "ジョ" : ["jo"],
        "ヂャ" : ["ja"],
        "ヂュ" : ["ju"],
        "ヂョ" : ["jo"],
        "ビャ" : ["bya"],
        "ビュ" : ["byu"],
        "ビョ" : ["byo"],
        "ピャ" : ["pya"],
        "ピュ" : ["pyu"],
        "ピョ" : ["pyo"]
      },
      obsolete: {
        "ヰ" : ["wi"],
        "ヱ" : ["we"]
      }
    }
}

function runGame() {
  let localStorage = window.localStorage;
  let timerElement = document.getElementById('timer');
  let answerFieldElement = document.getElementById('answer_field');
  let currentKanaElement = document.getElementById('current_kana');


  let kanaSettings = {};
  for (let type in ALL_KANA) {
      for (let subtype in ALL_KANA[type]) {
        kanaSettings[type + '_' + subtype] = false;
      }
  }

  let gameSettings;
  if (localStorage.getItem('kanaSettings')) {
    gameSettings = new GameSettings(
      timerElement,
      answerFieldElement,
      currentKanaElement,
      JSON.parse(localStorage.getItem('kanaSettings'))
    );
  } else {
    gameSettings = new GameSettings(
      timerElement,
      answerFieldElement,
      currentKanaElement,
      kanaSettings
    );
  }

  window.game = new KanaGemu(ALL_KANA, gameSettings);
}

function updateLocalStorage(gameSettings) {
  let localStorage = window.localStorage;
  let kanaSettings = JSON.stringify(gameSettings.kanaSettings);
  localStorage.setItem('kanaSettings', kanaSettings);
}

function reset() {
  window.localStorage.clear();
  window.location.reload();
}

class KanaGemu {
  constructor(allKana, gameSettings) {
    this.allKana = allKana;
    this.gameSettings = gameSettings;
    this.challangeStartTime = 0;
    this.generateKanaMap();

    this.generateSettingsElements();

    this.nextKana();

    this.timerInterval = setInterval(this.updateTime, 43, this);
    this.registerAnswerEventHandler();
  }

  checkAnswer(answer) {
    if (this.flatKanaAnswerMap[this.curKanaChallange].includes(answer)) {
      console.log('Correct!');
      this.nextKana();
    } else {
      console.log('Wrong! Input: ', answer, ' Correct: ', this.flatKanaAnswerMap[this.curKanaChallange].join(" "));
    }
  }

  nextKana() {
    this.challangeStartTime = Date.now();
    let next = Math.floor(Math.random() * this.activeKana.length);
    this.curKanaChallange = this.activeKana[next];
    this.gameSettings.currentKanaElement.textContent = this.curKanaChallange;
    this.gameSettings.answerFieldElement.textContent = '';
  }

  generateSettingsElements() {
    //Set up setting elements
    let settingsElement = document.getElementById('settings_kana');
    //Remove any children from the settings element
    while (settingsElement.firstChild) {
      settingsElement.removeChild(settingsElement.firstChild);
    }
    let inputTemplate = document.getElementById('settings_input');
    for (let key in this.gameSettings.kanaSettings) {
        let newSetting = document.importNode(inputTemplate.content, true);
        let newSettingCheckbox = newSetting.querySelector('input[type=checkbox]');
        let newSettingLabel = newSetting.querySelector('label');
        newSettingCheckbox.setAttribute('id', key);
        newSettingCheckbox.checked = this.gameSettings.kanaSettings[key];
        newSettingLabel.setAttribute('for', key);
        newSettingLabel.textContent = key.replace(/_/gi, ' ');

        newSettingCheckbox.addEventListener('input',
          (ev) => this.settingsChangeListener(ev, this)
        );

        settingsElement.appendChild(newSetting);
    }
  }

  generateKanaMap() {
    //TODO: de-structure depending on gameSettings object
    this.flatKanaAnswerMap = {};
    if (this.gameSettings.kanaSettings.hiragana_monographs) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.hiragana.monographs}
    }
    if (this.gameSettings.kanaSettings.hiragana_monographs_diacritics) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.hiragana.monographs_diacritics}
    }
    if (this.gameSettings.kanaSettings.hiragana_digraphs) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.hiragana.digraphs}
    }
    if (this.gameSettings.kanaSettings.hiragana_digraphs_diacritics) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.hiragana.digraphs_diacritics}
    }
    if (this.gameSettings.kanaSettings.hiragana_obsolete) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.hiragana.obsolete}
    }
    if (this.gameSettings.kanaSettings.katakana_monographs) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.katakana.monographs}
    }
    if (this.gameSettings.kanaSettings.katakana_monographs_diacritics) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.katakana.monographs_diacritics}
    }
    if (this.gameSettings.kanaSettings.katakana_digraphs) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.katakana.digraphs}
    }
    if (this.gameSettings.kanaSettings.katakana_digraphs_diacritics) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.katakana.digraphs_diacritics}
    }
    if (this.gameSettings.kanaSettings.katakana_obsolete) {
      this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...this.allKana.katakana.obsolete}
    }

    this.activeKana = Object.keys(this.flatKanaAnswerMap);
  }

  settingsChangeListener(ev, game) {
    let settingKey = ev.target.getAttribute('id');
    game.gameSettings.kanaSettings[settingKey] = ev.target.checked;
    game.generateKanaMap();
    game.nextKana();
    console.log('Set ' + settingKey + ' to ' + ev.target.checked);
    updateLocalStorage(game.gameSettings);
  }

  answerFieldEventHandler(ev, game) {
    game.checkAnswer(ev.target.innerText.trim())
  }

  registerAnswerEventHandler() {
    this.gameSettings.answerFieldElement.addEventListener('input',
      this.eventHandlerRef = (ev) => this.answerFieldEventHandler(ev, this)
    );
  }

  removeAnswerEventHandler() {
    this.gameSettings.answerFieldElement.removeEventListener('input', this.eventHandlerRef);
  }

  async updateTime(game) {
    game.gameSettings.timerElement.textContent = ((Date.now() - game.challangeStartTime) / 1000)
      .toFixed(2).toString().padStart(5, '0');
  }
}

class GameState {
    constructor() {

    }
}

class GameSettings {
  constructor(timerElement, answerFieldElement, currentKanaElement, kanaSettings) {
    this.timerElement = timerElement;
    this.answerFieldElement = answerFieldElement;
    this.currentKanaElement = currentKanaElement;
    this.kanaSettings = kanaSettings
  }
}
