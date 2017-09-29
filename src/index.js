module.exports = function zeros(expression) {

  var str = [];//массив для подстрок
  var i;
  var zero_count = 0;//количество нулей
  var chet = false;//флаг, проверяющий наличе факториал на наличие чётных составляющих
  var nechet_double = [];//массив для нечётных двойных факториалов
  //Есть метод split, который разбивает строку на подстроки: строка.split(разделитель)
  str = expression.split('*');

  var number_as_str;//тут число хранится как строка

  for(i = 0; i < str.length; i++)//проход по каждому факториалу
  {
    //определение типа факториала
    if(str[i].charAt(str[i].length-1) == str[i].charAt(str[i].length-2))//если последний и предпоследний символы i-ой строки равны, то факториал двойной
    {
      number_as_str = +(str[i].split("!")[0]);//мы разбиваем строку факториала на ['число','',''] и присваиваем number_as_str первый элемент этого массива уже как число, а не строку
      if(number_as_str % 2 == 0)//если число нечётное, то двойной факториал не будет иметь на конце нулей
      {
        chet = true;
        zero_count = zero_count + Math.floor(number_as_str/10);
        if(number_as_str >= 50)
        {
          zero_count++;
        }
        if(number_as_str >= 100)
        {
          zero_count++;
        }
      }
      else
      {
        nechet_double.push(number_as_str);
      }

    }
    else //факториал одинарный
    {
      chet = true;
      number_as_str = +(str[i].split("!")[0]);//мы разбиваем строку факториала на ['число',''] и присваиваем number_as_str первый элемент этого массива уже как число, а не строку
      for(var n = 1; number_as_str >= Math.pow(5,n); n++)//теперь мы будем делить наше число на 5 в степени n и складывать целочисленный результат, до тех пор, пока 5^n не превысит наше число
      {
        zero_count = zero_count + Math.floor(number_as_str/Math.pow(5,n));
      }
    }
  }

  if(chet == true)//если в выражении двойные нечётные факториалы перемножаются с любой чётной составляющей, то это даёт еще нестколько нулеё за счёт пятёрок
  {
    for(i = 0; i < nechet_double.length; i++)//сколько в числе пятёрок
    {
      zero_count = zero_count + Math.round(nechet_double[i]/10);
      if(nechet_double[i] >= 25)
      {
        zero_count++;
        if(nechet_double[i] >= 75)
        {
          zero_count++;
        }
      }
    }
  }

  return zero_count;
}
