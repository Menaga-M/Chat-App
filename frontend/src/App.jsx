import { Button } from '@heroui/react';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';

function App() {

  return (
    <div>
      <h1 className='text-4xl text-red-500 bg-blue-400'>Chat App</h1>
      <Button>
      My Button
    </Button>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal"/>
          <SignUpButton mode="modal"/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </div>
  )
}

export default App
