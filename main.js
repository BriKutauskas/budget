var expenses =
  ["rent",
  "water",
  "gas & electric",
  "car insurance",
  "car loan",
  "sprint",
  "internet",
  "groceries",
  "entertainment",
  "health insurance",
  "Gussel food",
  "Misc"
  ];

var dollars = 0;
function budget ()
{
  for(i=0; i<expenses.length; i++)
  {
    var cost = document.createElement('input');
    dollars = document.createElement('input');
    var breaks = document.createElement('br');
    var break1 = document.createElement('br');
    cost.setAttribute('type', 'text');
    cost.setAttribute('value', expenses[i]);
    dollars.setAttribute('id', 'money' + i);
    dollars.setAttribute('type', 'number');
    document.getElementById('costs').appendChild(cost);
    document.getElementById('costs').appendChild(breaks);
    document.getElementById('numbers').appendChild(dollars);
    document.getElementById('numbers').appendChild(break1);
  }
}
function total ()
{
  var billsTotal = 0;
  for (i=0; i<expenses.length; i++)
  {
    var moneys = +document.getElementById('money' + i).value;
    billsTotal = moneys + billsTotal;
  }
console.log(billsTotal);
}
