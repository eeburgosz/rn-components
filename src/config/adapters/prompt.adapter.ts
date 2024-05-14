import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  PromptType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subTitle,
  PromptType = 'plain-text',
  buttons,
  defaultValue,
  placeholder,
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: PromptType,
    cancelable: false,
    defaultValue,
    placeholder,
  });
};
