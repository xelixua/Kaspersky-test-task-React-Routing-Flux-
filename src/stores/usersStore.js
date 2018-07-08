import {EventEmitter} from 'events';

class UsersStore extends EventEmitter {
  constructor() {
    super();
    this.users = [
      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },

      {
        fullName: 'Sergey Maksimenko',
        account: 'companydomain/SergeyMaksimenko',
        email: 'sergey_maksimenko@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CEO',
        phone: '+380997883159',
        permissions: 3
      },
      {
        fullName: 'Ivan Ivanov',
        account: 'companydomain/IvanIvanov',
        email: 'ivan_ivanov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Management',
        position: 'CTO',
        phone: '+380991234567',
        permissions: 3
      },
      {
        fullName: 'Petr Petrov',
        account: 'companydomain/PetrPetrov',
        email: 'petr_petrov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 2
      },
      {
        fullName: 'Sidor Sidorov',
        account: 'companydomain/SidorSidorov',
        email: 'sidor_sidorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Workers',
        position: 'Developer',
        phone: '+380997883159',
        permissions: 2
      },
      {
        fullName: 'Prokhor Prkhorov',
        account: 'companydomain/ProkhorPrkhorov',
        email: 'prokhor_prkhorov@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'Vasiliy Vasilyev',
        account: 'companydomain/VasiliyVasilyev',
        email: 'vasiliy_vasilyev@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Freelancers',
        position: 'Developer',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'Bruce Willis',
        account: 'companydomain/BruceWillis',
        email: 'bruce_willis@ukr.net',
        photo: '/user_photo.jpeg',
        group: 'Techical personal',
        position: 'Cleaner',
        phone: '+380997883159',
        permissions: 1
      },
      {
        fullName: 'Piter Johnson',
        account: 'companydomain/PiterJohnson',
        email: 'piter_johnson@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380991234567',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      },
      {
        fullName: 'John Doe',
        account: 'companydomain/John Doe',
        email: 'john_doe@ukr.net',
        photo: '/user_photo.jpeg',
        group: null,
        position: 'Сourier',
        phone: '+380998901234',
        permissions: 1
      }
    ];
    this.users = this.users.map(user => {
      Object.keys(user).forEach(field => {
        user.lower = user.lower || {};
        user[field] = user[field] || '';
        user.lower[field] = user[field].toString().toLowerCase();
      });
      return user;
    });
  }

  getAll() {
    return this.users;
  }
}

export default new UsersStore();
