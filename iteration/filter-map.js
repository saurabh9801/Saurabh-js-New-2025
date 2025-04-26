// filter basics

const myNums = [1,3,5,6,8,9,10]
const newNums = myNums.filter( (num) => num > 5)
//console.log(newNums);


// other way to write filter 
// const anotherNum = myNums.filter( (num) =>{
//     return num > 5;  //if we will use scope we have to use return
// })
// console.log(anotherNum)


// how we can use above code in the for each loop

const myNums1  = []
myNums.forEach(num => {
    if(num >  5){
        myNums1.push(num)
    }
});
// console.log(myNums1);



const books = [
    { title: 'One', genre: 'Fiction', publish: 1981, edition: '2004' },
    { title: 'Two', genre: 'Non-Fiction', publish: 1992, edition: '2008' },
    { title: 'Three', genre: 'Science', publish: 1999, edition: '2010' },
    { title: 'Four', genre: 'History', publish: 1975, edition: '1985' },
    { title: 'Five', genre: 'Biography', publish: 2005, edition: '2015' },
    { title: 'Six', genre: 'Fantasy', publish: 2011, edition: '2018' },
    { title: 'Seven', genre: 'Technology', publish: 2000, edition: '2020' },
    { title: 'Eight', genre: 'History', publish: 1988, edition: '1995' },
    { title: 'Nine', genre: 'Romance', publish: 2015, edition: '2019' },
    { title: 'Ten', genre: 'Adventure', publish: 1995, edition: '2002' }
  ];

  const userBooks = books.filter( (bk) => bk.genre === 'History')
  const publishedYear =  books.filter(  (yrs) => yrs.publish >= 2000 )
//   console.log(userBooks)
console.log(publishedYear);

