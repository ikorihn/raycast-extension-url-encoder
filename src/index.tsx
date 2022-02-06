import { Form, ActionPanel, SubmitFormAction, showToast, ToastStyle, copyTextToClipboard } from "@raycast/api";

interface CommandForm {
  text: string;
  decode: boolean;
}

export default function Command() {
  function handleSubmit(values: CommandForm) {
    const text = values.decode ? decodeURIComponent(values.text) : encodeURIComponent(values.text);
    copyTextToClipboard(text);
    showToast(ToastStyle.Success, "Copied!", text);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <SubmitFormAction onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="text" title="Text" />
      <Form.Checkbox id="decode" label="Decode" />
    </Form>
  );
}
