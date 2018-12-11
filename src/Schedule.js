import {
    WidgetSchedule
  } from 'eventjuicer-site-components';


const Schedule = () => (
    <WidgetSchedule 
     times= {{
        '10:30': 'presentation',
        '11:10': 'presentation',
        '11:50': 'presentation',
        '12:30': 'presentation',
        '13:00': 'break_20',
        '13:20': 'presentation',
        '14:00': 'presentation',
        '14:40': 'presentation',
        '15:20': 'presentation'
      }}     
      venues= {{
        A: { company_id: 1365 },
        B: { company_id: 1366 },
        C: { company_id: 1398 },
        D: { company_id: 1023 }
      }}
    />
)

export default Schedule