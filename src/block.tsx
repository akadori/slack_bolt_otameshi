import { Blocks, Section } from 'jsx-slack'

export const exampleBlock = ({ name }: {name: string}) => (
  <Blocks>
    <Section>
      Hello, <b>{name}</b>!
    </Section>
  </Blocks>
)