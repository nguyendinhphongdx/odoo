import {ImageSourcePropType} from 'react-native';
import {HomeStackLogo} from '../../../assets/logo';
import Constant from '../../../config/Constant';
import {BoardRepository} from 'react-native-draganddrop-board';
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
  date?: string;
  actor: string;
  description?: string;
  spendTime?: string;
}
export interface PropsItemLogs {
  id: number;
  author: string;
  image?: string;
  time?: Date;
  message: string;
}
export interface PropsItemTask {
  id: string;
  name: string;
  description?: string;
  favorite?:boolean
}
var ListItemLogs: Array<PropsItemLogs> = [];
export const ListModule: Array<PropsItemModule> = [
  {
    id: 1,
    logo: HomeStackLogo.Calander,
    title: 'Project',
    navigation: Constant.SCREEN.PROJECT,
  },
  {
    id: 2,
    logo: HomeStackLogo.Clock,
    title: 'Clock',
  },
  {
    id: 3,
    logo: HomeStackLogo.Folder,
    title: 'Folder',
  },
  {
    id: 4,
    logo: HomeStackLogo.Graph,
    title: 'Graph',
  },
  {
    id: 5,
    logo: HomeStackLogo.Task,
    title: 'Task',
  },
  {
    id: 6,
    logo: HomeStackLogo.Timming,
    title: 'Timming',
  },
  {
    id: 7,
    logo: HomeStackLogo.Calander,
    title: 'Calander',
  },
  {
    id: 8,
    logo: HomeStackLogo.Clock,
    title: 'Clock',
  },
  {
    id: 9,
    logo: HomeStackLogo.Folder,
    title: 'Folder',
  },
  {
    id: 10,
    logo: HomeStackLogo.Graph,
    title: 'Graph',
  },
  {
    id: 11,
    logo: HomeStackLogo.Task,
    title: 'Task',
  },
  {
    id: 12,
    logo: HomeStackLogo.Timming,
    title: 'Timming',
  },
];
export const ListProject: Array<PropsItemProject> = [
  {
    id: 0,
    color: 'white',
    title: 'Công việc chung',
    priority: 100,
    task: 0,
    favorites: true,
  },
  {
    id: 1,
    color: 'green',
    title: 'DA chuyển đổi số cho DN',
    priority: 10,
    task: 11,
    favorites: false,
  },
  {
    id: 2,
    color: 'red',
    title: 'ERP chuyển đổi số cho DN',
    priority: 2,
    task: 0,
    favorites: true,
  },
  {
    id: 3,
    color: 'gray',
    title: 'KD-ERP-082021',
    priority: 20,
    task: 12,
    favorites: false,
  },
  {
    id: 4,
    color: 'white',
    title: 'Nội bộ',
    priority: 12,
    task: 0,
    favorites: true,
  },
  {
    id: 5,
    color: 'orange',
    title: 'VICSA',
    priority: 90,
    task: 20,
    favorites: true,
  },
];

const data = [
  {
    id: 1,
    name: 'Mới tạo',
    rows: [
      {
        id: '1',
        name: 'Đảm bảo an ninh cho hệ thống',
        description: 'Dựng firewall cho DMZ',
        favorite:true
      },
      {
        id: '2',
        name: 'Đảm bảo an ninh cho hệ thống',
        description: 'Dựng hệ thống giám sát SOC',
      },
    ],
  },
  {
    id: 2,
    name: 'Đang xử lý',
    rows: [
      {
        id: '4',
        name: 'Lên kế hoạch tổng thể phát triển DC',
        description: 'How did they use line and shape? How did they shade?',
        favorite:true
      },
      {
        id: '5',
        name: 'Đảm bảo an ninh cho hệ thống',
        description: 'Learn from the masters by copying them',
      },
    ],
  },
  {
    id: 3,
    name: 'Xong chờ duyệt',
    rows: [],
  },
  {
    id: 4,
    name: 'Không duyệt',
    rows: [],
  },
  {
    id: 5,
    name: 'Hoàn thành',
    rows: [
      {
        id: '7',
        name: 'Đảm bảo an ninh cho hệ thống ',
        description: 'Dựng hệ thống WAF',
        favorite:true
      },
      {
        id: '8',
        name: 'Đảm bảo an ninh cho hệ thống',
        description: 'Dựng proxy',
        favorite:true
      },
    ],
  },
];

export const boardRepository = new BoardRepository(data);

export const dataTimeTable: Array<PropsItemTimeRow> = [
  {
    id: 0,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 1,
    actor: 'TrungLN',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 2,
    actor: 'VietPDb',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 3,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 4,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 5,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 6,
    actor: 'TrungLN',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 7,
    actor: 'VietPDb',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 8,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
  {
    id: 9,
    actor: 'PhongND',
    description: 'This is description',
    spendTime: '2h',
    date: '12/7/2021',
  },
];
for (let index = 0; index < 10; index++) {
  ListItemLogs.push({
    id: index,
    author: 'phongnd',
    time: new Date(),
    message: 'abc',
  });
}
export {ListItemLogs};
