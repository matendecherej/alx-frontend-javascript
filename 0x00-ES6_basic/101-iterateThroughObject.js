export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iteration = reportWithIterator.next();
  
  while (!iteration.done) {
    result += iteration.value + ' | ';
    iteration = reportWithIterator.next();
  }
  
  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);
  
  return result;
}
