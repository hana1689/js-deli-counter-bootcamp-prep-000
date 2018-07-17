function takeANumber(katzDeliLine, customername)
{
  var string
  if (katzDeliLine.length == 0)
  {
    katzDeliLine.push(customername)
    string = `Welcome, ${customername}. You are number 1 in line.`
  }
  else
  {
    katzDeliLine.push(customername)
    string = `Welcome, ${customername}. You are number ${katzDeliLine.length} in line.`
  }
  return string
}
function nowServing(katzDeliLine)
{
  if (katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    katzDeliLine.shift()
    return 
  }
}