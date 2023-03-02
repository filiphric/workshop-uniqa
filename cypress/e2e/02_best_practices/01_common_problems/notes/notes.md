## Common mistakes when writing tests

The most common mistake is [not reading the documentation](https://docs.cypress.io). Cypress ahs done a great job with the documentation and there’s quite a lot you can learn from it. Definitely give it a go. 

There’s a great article on Best practices there that will guide you through some of the basic [patterns and antipatterns](https://docs.cypress.io/guides/references/best-practices).

In addition to these I have some examples of common mistakes that I see in the community:

## Targetting improper elements
Let’s say we have a following element:

```html
<button disabled>
  <span>Click me!</span>
</button>
```

There’s actually a big difference when targeting `span` vs. targetting `button` element. Our `button` element is disabled and therefore a user should not be able to click on it. Cypress does a [couple of checks in the background](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability) to make sure that a real user would be able to click on our element. Therefore using `cy.get('button')` would not click on our element, because it has `disabled` property on it.

But in case of using `cy.get('span')`, there does not seem to be a problem. Cypress will click on this element, but there will be no interaction, because the click will essentially be dead.

## Writing negative tests
It is much harder to write a good negative test than to write a positive one. The options for what is NOT supposed to happen are basically endless. You should avoid writing negative tests att all costs, but if you do, make sure you have proper checkpoints set up.

## Writing too long chains
There are three types of commands in Cypress: Actions, Queries and Assertions. Understanding how they work is a very important part of understanding what is going on in Cypress. This will also open the gate to reading more readable chains.

Readability is an important factor when creating and maintaining tests. Writing short and easy to understand chains can help a lot in this area.

## Not using your dev tools
Cypress is built for browser, which is a great advantage. The application that you are testing is live and you can keep on interacting with it. You can also debug and examine it using your dev tools. Cypress actually takes advantage of browser console and will print out details about each command. These can be really helpful when debugging a test or simply understanding what is going on as commands run.