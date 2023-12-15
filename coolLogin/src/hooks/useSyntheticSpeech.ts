/**
 * @author Leroy
 * 使用语音合成
 */

export default () => {
  const runSyntheticSpeech = (text: string) => {
    const texts = new SpeechSynthesisUtterance(text);
    texts.lang = "zh-CN";
    texts.pitch = 0.55;
    speechSynthesis.speak(texts);
  };

  return { runSyntheticSpeech };
};
