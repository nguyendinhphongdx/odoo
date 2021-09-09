import { ImageSourcePropType } from "react-native";
import { HomeStackLogo } from "../../../assets/logo";
import Constant from "../../../config/Constant";
import { BoardRepository } from 'react-native-draganddrop-board';
export interface PropsItemModule {
    id: number;
    logo: ImageSourcePropType;
    title: string;
    priority?: number;
    navigation?: string;
}
export interface PropsItemProject {
    id: number;
    color?: string;
    title: string;
    priority?: number;
    task?: number;
    favorites?: boolean;
}
export interface PropsItemTimeRow {
  id: number;
  date?:string;
  actor: string;
  description?: string;
  spendTime?: string;
}
export interface PropsItemLogs {
  id: number;
  author:string;
  image?: string;
  time?: Date;
  message: string;
}
var ListItemLogs:Array<PropsItemLogs> = [];
export const ListModule: Array<PropsItemModule> = [
    {
        id: 1,
        logo: HomeStackLogo.Calander,
        title: 'Project',
        navigation: Constant.SCREEN.PROJECT
    },
    {
        id: 2,
        logo: HomeStackLogo.Clock,
        title: 'Clock'
    },
    {
        id: 3,
        logo: HomeStackLogo.Folder,
        title: 'Folder'
    },
    {
        id: 4,
        logo: HomeStackLogo.Graph,
        title: 'Graph'
    },
    {
        id: 5,
        logo: HomeStackLogo.Task,
        title: 'Task'
    },
    {
        id: 6,
        logo: HomeStackLogo.Timming,
        title: 'Timming'
    },
    {
        id: 7,
        logo: HomeStackLogo.Calander,
        title: 'Calander'
    },
    {
        id: 8,
        logo: HomeStackLogo.Clock,
        title: 'Clock'
    },
    {
        id: 9,
        logo: HomeStackLogo.Folder,
        title: 'Folder'
    },
    {
        id: 10,
        logo: HomeStackLogo.Graph,
        title: 'Graph'
    },
    {
        id: 11,
        logo: HomeStackLogo.Task,
        title: 'Task'
    },
    {
        id: 12,
        logo: HomeStackLogo.Timming,
        title: 'Timming'
    }
]
export const ListProject: Array<PropsItemProject> = [
    {
        id: 0,
        color: 'white',
        title: 'Công việc chung',
        priority: 100,
        task: 0,
        favorites: true
    },
    {
        id: 1,
        color: 'green',
        title: 'DA chuyển đổi số cho DN',
        priority: 10,
        task: 11,
        favorites: false
    }
    ,
    {
        id: 2,
        color: 'red',
        title: 'ERP chuyển đổi số cho DN',
        priority: 2,
        task: 0,
        favorites: true
    },
    {
        id: 3,
        color: 'gray',
        title: 'KD-ERP-082021',
        priority: 20,
        task: 12,
        favorites: false
    }, {
        id: 4,
        color: 'white',
        title: 'Nội bộ',
        priority: 12,
        task: 0,
        favorites: true
    },
    {
        id: 5,
        color: 'orange',
        title: 'VICSA',
        priority: 90,
        task: 20,
        favorites: true
    }
]

 
const data = [
  {
    id: 1,
    name: 'TO DO',
    rows: [
      {
        id: '1',
        name: 'Analyze your audience',
        description: 'Learn more about the audience to whom you will be speaking'
      },
      {
        id: '2',
        name: 'Select a topic',
        description: 'Select a topic that is of interest to the audience and to you'
      },
      {
        id: '3',
        name: 'Define the objective',
        description: 'Write the objective of the presentation in a single concise statement'
      }
    ]
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    rows: [
      {
        id: '4',
        name: 'Look at drawings',
        description: 'How did they use line and shape? How did they shade?'
      },
      {
        id: '5',
        name: 'Draw from drawings',
        description: 'Learn from the masters by copying them'
      },
      {
        id: '6',
        name: 'Draw from photographs',
        description: 'For most people, it’s easier to reproduce an image that’s already two-dimensional'
      }
    ]
  },
  {
    id: 3,
    name: 'DONE',
    rows: [
      {
        id: '7',
        name: 'Draw from life',
        description: 'Do you enjoy coffee? Draw your coffee cup'
      },
      {
        id: '8',
        name: 'Take a class',
        description: 'Check your local university extension'
      }
    ]
  }
]
 
export const boardRepository = new BoardRepository(data);


export const dataTimeTable:Array<PropsItemTimeRow>=[
  {
    id:0,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:1,
    actor: "TrungLN",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:2,
    actor: "VietPDb",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:3,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },{
    id:4,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:5,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:6,
    actor: "TrungLN",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:7,
    actor: "VietPDb",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },
  {
    id:8,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  },{
    id:9,
    actor: "PhongND",
    description: "This is description",
    spendTime: "2h",
    date:'12/7/2021'
  }
]
for (let index = 0; index < 10; index++) {
  ListItemLogs.push({
      id:index,
      author:'phongnd',
      time:new  Date(),
      message:'abc'
  })
  
}
export {ListItemLogs}