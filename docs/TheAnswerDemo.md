# The Answer Demonstration

Below are the instructions for using _The Answer_.

These instructions assume you have already followed the instructions detailed in [Install.md](Install.md) and either [VBoxTheAnswerInstall.md](VBoxTheAnswerInstall.md) if you are using the Virtual Box implementation, or [TheAnswerInstall.md](TheAnswerInstall.md) if you aren't. If you have not followed those instructions, do so now.

## Use _The Answer_

1. Type in a question and hit _Ask!_. The answer may take a while to appear (on some machines, it may take 5 minutes or more). Can you explain why it does not return instantly?

## Examine the Front End Application

From within `atom`, open the files `src/react-the-answer/app/index.jsx`, `src/react-the-answer/app/containers/answer.jsx` and `src/react-the-answer/app/components/answer.jsx`.

1. Do you understand the architecture of the front end application? Would you architect it that way? If not, how would you build the application?
2. Why does the application use an event to get _The Answer_?
