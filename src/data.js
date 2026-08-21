const _e = [106, 117, 110, 102, 101, 110, 103, 49, 50, 56, 55];
const _d = [103, 109, 97, 105, 108, 46, 99, 111, 109];

export const profile = {
  name: "Junfeng Li",
  get email() {
    return String.fromCharCode(..._e) + "@" + String.fromCharCode(..._d);
  },
  github: "https://github.com/Livfour",
  googleScholar:
    "https://scholar.google.com/citations?user=X4wV9ucAAAAJ",
  title: "Ph.D. Student",
  affiliation: "HKUST (Guangzhou)",
  location: "Guangzhou, China",
  researchInterests: "Vision-Language-Action Models, World Models",
  bio: [
    {
      segments: [
        { text: "I am currently a Ph.D. student at " },
        {
          link: "Hong Kong University of Science and Technology (Guangzhou)",
          url: "https://www.hkust-gz.edu.cn/",
        },
        { text: ", supervised by " },
        {
          link: "Prof. Haoang Li",
          url: "https://sites.google.com/view/haoangli/homepage",
        },
        { text: "." },
      ],
    },
    {
      text: "My research interests lie in **Vision-Language-Action (VLA) Models** and **World Models**. I am passionate about building embodied agents that can understand the physical world and perform complex tasks.",
    },
    {
      text: "I am always open to research collaborations. Please feel free to reach out if you are interested in working together!",
    },
  ],
};

export const publications = [
  {
    title:
      "DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation",
    authors:
      "Junfeng Li*, Junjie He*, Zhide Zhong*, Yangyang Zheng*, Pingyue Sheng, Jiayu Dong, Ruixin Li, Haodong Yan, Jiaguan Zhu, Tianran Zhang, Runze Yu, Wen Chen, Liuqing Yang, Yuxiang Gao, Haoang Li",
    venue: "arXiv preprint arXiv:2608.06374, 2026.",
    paper: "https://arxiv.org/abs/2608.06374",
    home_page: "https://livfour.github.io/DyPES-VLA_RELEASE/",
  },
  {
    title:
      "Robust-WAM: Bridging Generative Pretraining and Semantic Foresight in World-Action Models",
    authors:
      "Haodong Yan*, Junfeng Li*, Junjie He*, Zhide Zhong, MingMing Yu, Wenxuan Song, Jiaguan Zhu, Yangyang Zheng, Yuqiao Du, Jiadi You, Yingjie Cai, Xu Yan, Guanyi Zhao, Bingbing Liu, Haoang Li",
    venue: "arXiv preprint arXiv:2608.05903, 2026.",
    paper: "https://arxiv.org/abs/2608.05903",
    home_page: "https://haodong-yan.github.io/robust-wam-project-page/",
  },
  {
    title:
      "SG-WAM: Text-Grounded and Spatial-aware Semantic Guidance for World-Action Models",
    authors:
      "Junjie He*, Junfeng Li*, Zhide Zhong*, Haodong Yan*, Ruixin Li, Yangyang Zheng, Jiaguan Zhu, Tianran Zhang, Yuqiao Du, Wen Chen, Shunbo Zhou, Haoang Li",
    venue: "arXiv preprint arXiv:2608.08839, 2026.",
    paper: "https://arxiv.org/abs/2608.08839",
  },
  {
    title:
      "Is Forward Prediction Enough? Physical State Grounding for JEPA World Models",
    authors:
      "Haodong Yan*, Jiaguan Zhu*, Mingyuan Jia, Ruiqing Yin, Junjie He, Zhide Zhong, Junfeng Li, Jinxuan Lu, Hengtao Li, Tianran Zhang, Jiayi Chen, Wenxuan Song, Wen Chen, Yuxiang Gao, Haoang Li",
    venue: "arXiv preprint arXiv:2608.06799, 2026.",
    paper: "https://arxiv.org/abs/2608.06799",
    home_page: "https://haodong-yan.github.io/psg-jepa-project-page/",
  },
  {
    title:
      "DualCoT-VLA: Visual-Linguistic Chain of Thought via Parallel Reasoning for Vision-Language-Action Models",
    authors:
      "Zhide Zhong*, Junfeng Li*, Junjie He*, Haodong Yan, Xin Gong, Guanyi Zhao, Yingjie Cai, Jiantao Gao, Xu Yan, Bingbing Liu, Yingcong Chen, Liuqing Yang, Haoang Li",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026.",
    paper: "https://arxiv.org/abs/2603.22280",
    home_page: "https://livfour.github.io/DualCoT-VLA/",
  },
  {
    title:
      "VLA-OPD: Bridging Offline SFT and Online RL for Vision-Language-Action Models via On-Policy Distillation",
    authors:
      "Zhide Zhong, Haodong Yan, Junfeng Li, Junjie He, Tianran Zhang, Haoang Li",
    venue: "arXiv preprint arXiv:2603.26666, 2026.",
    paper: "https://arxiv.org/abs/2603.26666",
    home_page: "https://irpn-lab.github.io/VLA-OPD/",
  },
  {
    title:
      "FlowVLA: Visual Chain of Thought-based Motion Reasoning for Vision-Language-Action Models",
    authors:
      "Zhide Zhong, Haodong Yan, Junfeng Li, Xiangchen Liu, Xin Gong, Tianran Zhang, Wenxuan Song, Jiayi Chen, Xinhu Zheng, Hesheng Wang, Haoang Li",
    venue: "IEEE Transactions on Robotics (T-RO), conditionally accepted.",
    paper: "https://arxiv.org/abs/2508.18269",
    home_page: "https://irpn-lab.github.io/FlowVLA/",
  },
  {
    title:
      "Open-world Hand-Object Interaction Video Generation Based on Structure and Contact-aware Representation",
    authors:
      "Haodong Yan, Hang Yu, Zhide Zhong, Weilin Yuan, Xin Gong, Zehang Luo, Chengxi Heyu, Junfeng Li, Wenxuan Song, Shunbo Zhou, Haoang Li",
    venue:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025.",
    paper: "https://arxiv.org/abs/2512.01677",
  },
  {
    title:
      "SCSV: Spatial-temporal Consistent Dynamic 3D Scene Generation from Sparse Views",
    authors:
      "Junfeng Li*, Junjie He*, Wenjie Liu*, Tianyu Huang, Shunbo Zhou, Jun Ma, Hesheng Wang, Haoang Li",
    venue: "IEEE Transactions on Image Processing (TIP), 2025.",
  },
];

export const experiences = [
  {
    role: "Ph.D. Student",
    period: "Sep. 2025 – Present",
    institution:
      "Hong Kong University of Science and Technology (Guangzhou)",
    institutionUrl: "https://www.hkust-gz.edu.cn/",
    location: "Guangzhou, China",
    note: "Supervised by Prof. Haoang Li.",
  },
  {
    role: "Research Assistant",
    period: "Jun. 2024 – Apr. 2025",
    institution:
      "Hong Kong University of Science and Technology (Guangzhou)",
    institutionUrl: "https://www.hkust-gz.edu.cn/",
    location: "Guangzhou, China",
    note: "Supervised by Prof. Haoang Li.",
  },
  {
    role: "Master of Science in Computer Science",
    period: "Sep. 2022 – Dec. 2023",
    institution: "University College London",
    institutionUrl: "https://www.ucl.ac.uk/",
    location: "London, United Kingdom",
    note: "Graduated with Distinction",
  },
  {
    role: "Bachelor of Engineering in Mechanical Engineering",
    period: "Sep. 2019 – Jul. 2021",
    institution: "University of Birmingham",
    institutionUrl: "https://www.birmingham.ac.uk/",
    location: "Birmingham, United Kingdom",
    note: "First-Class Honours",
  },
];
