// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



function onSelectChange(selectObject)
{
    var selectValue = selectObject.value;
    var ul = document.getElementsByClassName('box')[0]

    if (selectValue != "")
    {
        sortUlElement(ul, selectValue);
    }

}

function sortUlElement(ul, selectValue)
{
    var cloneList = ul.cloneNode(true);
    var tempList = [];

    for (var i = ul.childNodes.length; i--;)
    {
        if (ul.childNodes[i].nodeName === 'LI')
        {
            tempList.push(ul.childNodes[i]);
        }
    }

    tempList.sort((a, b) => sortList(a, b, selectValue));

    // Add them into the ul and in order
    for (var i = 0; i < tempList.length; i++)
    {
        cloneList.replaceChild(tempList[i], cloneList.children[i]);
    }

    ul.parentNode.replaceChild(cloneList, ul);
}

function assertValueIsInt(value)
{
    return value == "unknown" ? 0 : value;
}

function sortList(a, b, selectValue)
{
    var aValue = a.getElementsByClassName(selectValue)[0].lastElementChild.innerText
    var bValue = b.getElementsByClassName(selectValue)[0].lastElementChild.innerText

    var sortResult;

    if (selectValue === "name")
    {
        sortResult = ('' + aValue).localeCompare(bValue);
    } else
    {
        sortResult = parseInt(assertValueIsInt(bValue), 10) - parseInt(assertValueIsInt(aValue), 10);
    }

    return sortResult;
}