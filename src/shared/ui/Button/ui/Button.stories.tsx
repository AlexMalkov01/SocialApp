import { Button, ButtonProps, ButtonTheme } from "./Button";

export default {
  title: 'shared/Button',
  component: Button,
}

const Template = (args: ButtonProps) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  label: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Text',
  theme: ButtonTheme.OUTLINE,
};


