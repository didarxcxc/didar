// 1
// let a= [];
// 2
// let b = [1, 2, 3, 4, 5, 6, 7, 8];
// 3
// let b= [1, 2, 3, 4, 5, 6, 7, 8];
// let arrayLength = b.length;

// console.log('mynsha', arrayLength);
// 4
// let c = [1, 2, 3, 4, 5, 6, 7, 8];
// let firstItem = c[0];
// let middleIndex = Math.floor(c.length / 2);
// let middleItem = c[middleIndex];
// let lastIndex = c.length - 1;
// let lastItem = c[lastIndex];
// console.log('First item:', firstItem);
// console.log('Middle item:', middleItem);
// console.log('Last item:', lastItem);
// 5
// let d = [1, 'apple', true, { key: 'value' }, ['dog', 'cat'], null];
// let arrayLength = d.length;
// console.log('Mixed Data Types Array:', d);
// console.log('The length of the array is:', arrayLength);
// 6
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies)
// 8
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log('mynsha:', itCompanies.length);
// 9
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log('First company:', itCompanies[0]);
// let middleIndex = Math.floor(itCompanies.length / 2);
// console.log('Middle company:', itCompanies[middleIndex]);
// let lastIndex = itCompanies.length - 1;
// console.log('Last company:', itCompanies[lastIndex]);
// 10
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])
// 12
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let sentence = `${itCompanies.join(', ')} are big IT companies.`;
// console.log(sentence);
// 13
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let companyToCheck = 'Microsoft';
// if (itCompanies.includes(companyToCheck)) {
//   console.log(`${companyToCheck} ат компанияларының массивінде бар.`);
// } else {
//   console.log(`${companyToCheck} ат компанияларының массивінде жок.`);
// }
// 14
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let companiesWithOneO = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   let company = itCompanies[i];
//   let oCount = 0;
//   for (let j = 0; j < company.length; j++) {
//     if (company[j].toLowerCase() === 'o') {
//       oCount++;
//     }
//   }
//   if (oCount <= 1) {
//     companiesWithOneO.push(company);
//   }
// }
// console.log('Companies with at most one "o":', companiesWithOneO);
// 15
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.sort();
// console.log('Sorted IT companies:', itCompanies);
// 16
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.reverse();
// console.log('Reversed IT companies:', itCompanies);
// 17
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let firstThreeCompanies = itCompanies.slice(0, 3);
// console.log('First three IT companies:', firstThreeCompanies);
// 18
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// let lastThreeCompanies = itCompanies.slice(-3);
// console.log('Last three IT companies:', lastThreeCompanies);
// Calculate the middle index or indices
// 19
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// let middleIndex = Math.floor(itCompanies.length / 2);
// let middleCompanies;
// if (itCompanies.length % 2 === 0) {
//   middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
// } else {
//   middleCompanies = [itCompanies[middleIndex]];
// }

// console.log('Middle IT company or companies:', middleCompanies);
// 20
//  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// let removedCompany = itCompanies.shift();
// console.log('Removed IT company:', removedCompany);
// console.log('Updated IT companies array:', itCompanies);
