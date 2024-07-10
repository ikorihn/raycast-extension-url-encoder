import { Form, ActionPanel, Action, showToast, Toast, Clipboard } from "@raycast/api";

type Values = {
  text: string;
  decode: boolean;
};

export default function Command() {
  async function handleSubmit(values: Values) {
    const value = values.decode ? decodeURIComponent(values.text) : encodeURI(values.text);
    showToast({ title: "URL Encode", message: `Copied to clipboard ${value}`, style: Toast.Style.Success });
    await Clipboard.copy(value);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="text" title="Text" />
      <Form.Checkbox id="decode" label="decode" />
    </Form>
  );
}
