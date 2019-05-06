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
            "ゐ" : ["wi"],
            "ゑ" : ["we"],
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
          "ぢゃ" : ["ja"],
          "ぢゅ" : ["ju"],
          "ぢょ" : ["jo"],
          "びゃ" : ["bya"],
          "びゅ" : ["byu"],
          "びょ" : ["byo"],
          "ぴゃ" : ["pya"],
          "ぴゅ" : ["pyu"],
          "ぴょ" : ["pyo"]
        }
    },
    katakana: {}
}
class KanaGemu {
  constructor(allKana, gameSettings) {
    this.gameSettings = gameSettings;
    this.challangeStartTime = 0;
    //TODO: de-structure depending on gameSettings object
    this.flatKanaAnswerMap = {};
    this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...allKana.hiragana.monographs}
    this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...allKana.hiragana.monographs_diacritics}
    this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...allKana.hiragana.digraphs}
    this.flatKanaAnswerMap = {...this.flatKanaAnswerMap, ...allKana.hiragana.digraphs_diacritics}

    this.activeKana = Object.keys(this.flatKanaAnswerMap);
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
  constructor(timerElement, answerFieldElement, currentKanaElement) {
    this.timerElement = timerElement;
    this.answerFieldElement = answerFieldElement;
    this.currentKanaElement = currentKanaElement;
  }
}
