import { Selector } from 'testcafe';

const article = Selector('.article-content');
await t.click(article); //takes actions on the element
//or
await t.expect(article.scrollHeight).eql(1800); //use it in assertions


//filtering page elements by text and attribute: 
const windowsRadioButton = Selector('.radio-button').withText('Windows'); 
const selectedRadioButton = Selector('.radio-button').withAttribute('selected');

//Search for specific element in the DOM tree using the selector API.
const buttonWrapper = Selector('.article-content').find('#share-button').parent();


fixture `Getting Started`
fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test ('Test1', async t => {

});


test 
    .page `http://devexpress.github.io/testcafe/blog/`
    ('Test2', async t => {

});




