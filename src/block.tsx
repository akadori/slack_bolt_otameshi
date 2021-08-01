import JSXSlack, { Button, Blocks, Actions } from 'jsx-slack'

export const exampleButton = ({ name }: {name: string}) => JSXSlack(
  <Blocks>
  <Actions>
    <Button actionId="button_clicked" value="value" style="primary">
      Action button
    </Button>
  </Actions>
</Blocks>

)