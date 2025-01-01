function newYearWishForIva() {
  const teacherIva = {
    name: 'Ива',
    skills: ['програмиране', 'роботика', 'вдъхновение'],
    thankYou:
      'Благодаря ти, че ни учи не само на синтаксис, четене на документация, но и на мислене!',
  };

  const wishes = {
    personal:
      'успешна компилация на всички твои мечти, без бъгове в плановете ти.',
    professional: 'Много вдъхновение за нови проекти и безупречен код.',
    balance: 'Идеален баланс между работа, студенти и време за себе си.',
    pride:
      'Още много моменти, които да те карат да се гордееш с труда и усилията, които полагаш.',
  };

  return `Честита Нова година, ${teacherIva.name}. 
    ${teacherIva.thankYou}
    От сърце ти желая ${wishes.personal}
    ${wishes.professional}
    ${wishes.balance}
    ${wishes.pride}`;
}

console.log(newYearWishForIva());
