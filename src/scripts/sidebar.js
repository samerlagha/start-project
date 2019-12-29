 export const renderSideabr = () =>{

    for(let i = 0 ; i < 24 ; i++){
        const sidebarHour = document.querySelector('div');
        sidebarHour.classList.add('.sidebar__hour');

      const sidebarHourtext = document.querySelector('span');
      sidebarHourtext.classList.add('.sidebar__hour-text');

      sidebarHourtext.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
      sidebar.append(sidebarHour);
      sidebarHour.append(sidebarHourtext);
    }

    const firsttHour = sidebar.firstChild;
    firstHour.classList.add('sidebar__no-display');
};

renderSideabr();