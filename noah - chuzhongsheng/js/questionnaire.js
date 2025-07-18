// 获取 URL 参数
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 多套题库（键为数字）
const questionBanks = {
  //初中生抑郁自评量表-20
  1: [
    "最近一段时间，你有没有觉得心情有点低落、闷闷不乐的时候？",
    "你觉得早上起床的时候，心情是开心的，还是有点沉重呢？",
    "你有没有想过要哭，或者有时候忍不住想哭？",
    "晚上睡觉的时候，你会不会经常睡不着，或者半夜醒来就很难再睡着了？",
    "最近吃饭的时候，你还像以前一样有胃口吗？",
    "你觉得自己身体状态还不错，还是感觉有点累？",
    "你有没有发现自己的体重变轻了，哪怕不是特意减肥？",
    "你是不是最近总觉得肚子不舒服，比如便秘、拉不出便便？",
    "你有没有感觉心跳突然加快，像是要跳出来那种感觉？",
    "有时候明明没做什么事，但就是觉得好累，连动都不想动？",
    "你现在做事、听课、做作业的时候，脑子还能集中注意力吗？",
    "你做事情的时候，还像以前一样顺利，还是会觉得有点困难？",
    "你有没有坐不住、静不下来的感觉，就像心里有一只小兔子一样？",
    "你对未来有什么期待吗？比如长大以后想做什么，或者有什么梦想？",
    "你是不是比平时更容易生气，一点点小事就会让你很烦？",
    "当你需要做一个决定的时候，比如选什么课、要不要参加活动，你会觉得很难下决定吗？",
    "你有没有觉得自己很重要，别人也离不开你？",
    "你觉得现在的生活中，还有让你觉得有趣、有意思的事情吗？",
    "有时候你会不会觉得，如果自己不在了，别人都会过得更好一些？",
    "你以前喜欢做的事情，比如打游戏、画画、听歌，现在还像以前那么喜欢吗？",
  ],
  //初中生焦虑自评量表-20
  2: [
    "最近这一周，你有没有感觉特别容易紧张，或者总是坐立不安，内心有点焦躁不安？",
    "你有没有过那种突然觉得心里空空的，好像有什么不好的事情即将发生，但又说不清楚具体是什么的感觉？",
    "有没有因为一些小事，就突然感觉到心跳加速或者手心冒汗？",
    "你有没有过那种感觉，好像身体的某些部分有点奇怪地不协调，或者甚至感觉不太真实，好像跟自己有点分离？",
    "最近这一周，你有没有觉得做什么事情都特别顺利，很少遇到令人沮丧或不顺心的事？",
    "你有没有发现，在某些时候，自己的手会不由自主地微微颤抖，好像控制不住一样？",
    "最近是不是感觉头、脖子或者背部经常不舒服，这些地方的疼痛有没有频繁地困扰你？",
    "有没有感觉自己特别没力气，做什么事情都提不起劲，只想休息？",
    "最近你有没有感觉内心特别平静，能够很安静地坐着看书或者好好休息，不被外界打扰？",
    "你有没有觉得心跳特别快，快到像是要从胸口跳出来一样？",
    "有没有突然感到头晕目眩，视线模糊，甚至觉得有点站不稳的感觉？",
    "你有没有突然觉得好像快要晕倒了，有那种‘眼前一黑’的危险感觉？",
    "你呼吸的时候，有没有觉得特别顺畅，一点都不费力，很轻松？",
    "你的手指或者脚趾有没有经常感觉发麻，或者像针扎一样刺痛？",
    "最近你有没有感觉胃不太舒服，比如胃痛，或者吃完东西以后更容易感到不消化、胀气？",
    "你有没有发现自己最近上厕所（小号）的次数，比平时多很多？",
    "你的手是不是大部分时间都保持温暖，而且不容易出汗？",
    "你有没有突然感觉自己的脸部发烫，或者脸颊突然变得很红？",
    "晚上睡觉的时候，你有没有觉得特别轻松，可以一觉睡到天亮，醒来感觉特别精神？",
    "你做梦的时候，有没有经常梦到一些让你感到害怕或者不安的场景？",
  ],
  //中学生心理健康评估量表-65
  3: [
    "你写完作业后会反复检查好几遍吗？比如一道题写了又擦，总觉得哪里不对劲？",
    "有时候你会为了不出错，做事特别慢吗？比如写作业的时候总是拖延很久才完成？",
    "你有没有特别在意衣服是否整齐，比如扣子没扣好就会一直调整？",
    "有没有过明明该做作业了，却突然想到一些无关紧要的事情，怎么也甩不开？",
    "你有没有反复洗手或者数数的习惯？比如洗手洗很多遍才觉得安心？",
    "考试前即使知道复习得差不多了，还是会忍不住担心考不好吗？",
    "你是不是经常觉得自己的想法和别人不太一样，甚至怀疑别人在针对你？",
    "你有没有觉得同学或朋友想占你便宜，比如拿走你的东西不还？",
    "有没有感觉有人在背后议论你，虽然可能只是你的猜测？",
    "你是不是觉得很难信任别人，即使是很熟的朋友？",
    "你有没有觉得别人对你的评价不太公平，比如老师给你打分太低了？",
    "有没有感觉别人总是跟你作对，比如故意找你麻烦？",
    "你有没有控制不住自己发脾气的情况，比如明明想忍住却还是大喊大叫？",
    "你有没有因为生气而大喊大叫，或者摔东西的情况？",
    "你是不是经常对自己很严格，总是责怪自己做得不够好？",
    "你是不是容易因为小事就激动或烦恼，比如和同学的小摩擦？",
    "有没有过特别生气的时候，想伤害别人或者打人？",
    "你有没有过想摔东西的冲动，即使最后没这么做？",
    "你有没有感觉同学们对你不太友好，或者觉得他们不喜欢你？",
    "当别人盯着你看或者讨论你的时候，会不会觉得特别不自在？",
    "有没有觉得别人不理解你，比如遇到困难时没人安慰你？",
    "你是不是容易因为别人的一句话或一个举动就感到受伤？",
    "和异性同学相处的时候，你会觉得害羞或不自在吗？",
    "你是不是对别人要求特别高，觉得他们必须做到完美？",
    "最近有没有觉得心情特别苦闷，做什么都没兴趣？",
    "你是不是最近特别容易哭，即使是一点小事？",
    "有没有觉得未来没什么希望，生活特别没劲？",
    "你是不是经常责怪自己，觉得自己做得不够好？",
    "有没有感觉每天都很累，做什么都提不起精神？",
    "你有没有过不想活的念头，觉得活着没意思？",
    "你是不是经常感到紧张，比如在陌生人面前说话会手心出汗？",
    "有没有过坐立不安的感觉，比如上课时一直想动，静不下心？",
    "有没有过突然感到害怕，即使周围什么都没发生？",
    "你是不是经常觉得心里烦躁，做什么都不顺心？",
    "有没有感觉心里空落落的，总觉得有什么事要发生？",
    "你是不是经常觉得心里有事，即使不知道具体是什么？",
    "你觉得现在的学习任务太重，经常熬夜做作业吗？",
    "上课时是不是总担心老师会突然提问到你？",
    "每次听到要考试，你会特别紧张吗？",
    "你是不是越来越讨厌做作业，觉得它很无聊？",
    "你有没有觉得上学很痛苦，不想去学校？",
    "你是不是特别讨厌考试，觉得它压力很大？",
    "你喜欢参加学校组织的课外活动，比如运动会或者文艺汇演吗？",
    "你有没有觉得现在的学校生活不太适应，比如课程安排太紧？",
    "你有没有觉得现在的社会风气不太对劲，比如同学之间攀比？",
    "你有没有觉得老师的教学方法不太适合你，比如讲课太快？",
    "你觉得家里环境影响你的学习，比如家人经常打扰你？",
    "你有没有觉得班里的风气不太好，比如同学之间勾心斗角？",
    "你的心情会突然变化吗，比如刚才还开心，现在就哭了？",
    "你学习的动力是不是时高时低，有时候特别认真，有时候又不想学？",
    "你做作业的时候，热情是不是忽高忽低，有时候特别积极，有时候又拖拉？",
    "你对同学的态度是不是有时候热情，有时候又冷淡？",
    "你对老师的态度是不是有时候很亲近，有时候又觉得疏远？",
    "你对父母的态度是不是有时候很好，有时候又特别冷淡？",
    "当同学考得比你好时，你会觉得难过吗？",
    "你有没有觉得老师对你不公平，比如评分不公正？",
    "当看到同学穿得比你好，或者更有钱时，你会不舒服吗？",
    "你有没有觉得父母对你不公平，比如偏心对待兄弟姐妹？",
    "当看到比你强的同学时，你会不服气吗？",
    "当同学考得比你好，但你觉得他们其实没你能力强时，你会怎么想？",
  ],
  //小学生儿童通用心理评估表-55
  4: [
    "平时你喜欢和爸爸妈妈一起做些有趣的事情吗？比如说玩游戏、看电视或者一起吃饭？",
    "你觉得家里人在一起相处得怎么样？开心吗？",
    "你觉得爸爸妈妈公平地对待你吗？比如说会不会偏心哥哥姐姐或弟弟妹妹？",
    "你喜欢和家人一起在家待着的感觉吗？",
    "爸爸妈妈会经常陪你一起玩吗？还是他们太忙了没时间？",
    "家里住的地方你觉得舒服吗？比如房间、客厅这些地方。",
    "你觉得你们家比别的家庭过得更好一点吗？",
    "你觉得自己有很多好朋友吗？平时玩得好吗？",
    "你的朋友对你好不好？有没有欺负你或者不理你的时候？",
    "当你需要帮助的时候，朋友们会愿意帮你吗？",
    "和朋友一起玩的时候，你会觉得很开心吗？",
    "你的朋友是不是也像你一样有趣呢？",
    "你有没有特别关心你的朋友？他/她对你好吗？",
    "你喜欢上学吗？每天早上起床想到要上学，是高兴还是不太想出门？",
    "在学校里，你觉得自己学到很多新东西了吗？",
    "老师上课提问题的时候，你会不会有点紧张不敢举手？",
    "你在学校里有没有觉得不舒服的时候？比如说不想待在教室里？",
    "上课或者考试的时候，你会不会很紧张，心跳加快？",
    "你有没有觉得学校里有些事情让你不喜欢？",
    "你喜欢参加学校的活动吗？比如说运动会、表演或者春游？",
    "你觉得上学有意思吗？每天都期待去学校吗？",
    "你喜欢你住的地方吗？比如说小区、街道、公园这些地方？",
    "你住的地方好玩的东西多不多？有没有你想去的地方？",
    "你家的房子你觉得住起来舒服吗？有没有漏水、太吵这些问题？",
    "你喜欢周围的邻居吗？他们会跟你打招呼、说说话吗？",
    "你住的地方有没有很多有趣的事可以做？比如说骑车、踢球、捉迷藏？",
    "你喜欢自己是个什么样的孩子吗？比如说聪明、善良、勇敢这些特点？",
    "你觉得你自己是一个好孩子吗？别人怎么评价你？",
    "你会不会觉得自己不如别人？比如说成绩、外貌、朋友数量这些方面？",
    "你觉得自己的长相还可以吗？会不会觉得自己不好看？",
    "你会不会觉得自己没有活力、不够吸引人？",
    "你觉得你是一个很有能力的孩子吗？比如说会画画、会运动、会讲故事？",
    "你有没有觉得生活没什么意思的时候？比如说做什么都不开心？",
    "你会不会觉得自己像个失败者？比如说考试考砸了或者被朋友误解？",
    "你会不会经常感到难过、伤心，甚至一个人偷偷哭？",
    "你有没有讨厌过自己？觉得自己什么都不好？",
    "你有没有对未来感到失望？比如说觉得以后也不会变好？",
    "你有没有不想和别人说话、也不想和人交朋友的时候？",
    "你有没有觉得大家都不喜欢你？",
    "你会不会担心自己迟到？比如说上课、约会或者活动开始前？",
    "你会不会因为怕说错话而不敢说话？尤其是在大人面前？",
    "你会不会做事犹豫不决？比如说不知道该选什么玩具、该穿哪件衣服？",
    "你会不会比其他小朋友更容易紧张、着急？",
    "你会不会经常觉得心烦意乱、害怕一些事情发生？",
    "你会不会觉得时间不够用？总有好多事要做？",
    "你会不会在生人面前脸红、心跳加快？",
    "你会不会一想到某些事情就紧张得睡不着觉？",
    "你会不会无缘无故地觉得身体很累，一点力气都没有？",
    "你会不会突然觉得手脚发麻、刺痛，像是触电了一样？",
    "你会不会经常觉得手脚出汗、发抖？",
    "你会不会胃口不好，不想吃饭？",
    "你会不会觉得呼吸困难，或者好像要晕倒一样？",
  ],
  //小学生心理健康评定量表-33
  5: [
    "你有没有觉得学字母或拼音有点难？比如有时候分不清b和d，或者拼错了音节？",
    "当你看到汉字的时候，会不会有些字你看很久也认不出来？",
    "玩数字游戏的时候，有没有觉得数大小顺序特别容易搞混？比如3比5大还是小？",
    "算数学题的时候有没有觉得特别难？比如加减法总要算很久？",
    "画画的时候，会不会经常把东西画歪了或者涂色超出线？",
    "画人物或场景的时候，有没有出现过前后左右位置颠倒的情况？比如把鼻子画在眼睛旁边？",
    "一听到‘写作业’三个字，你是什么感觉呀？是兴奋、紧张还是有点烦？",
    "和爸爸妈妈聊作业的时候，你会认真听吗？还是觉得没意思？",
    "你有没有因为作业没交或者质量不好被老师提醒过？",
    "考试的时候，你是不是经常担心考不好？",
    "有时候你会因为小事变得很担心吗？比如铅笔断了、忘带本子？",
    "你会不会感觉坐立不安，像小陀螺一样停不下来？",
    "最近你有没有觉得吃不下饭，或者心跳特别快？",
    "你有没有头痛、失眠或者半夜老上厕所的情况？",
    "有时候你会不想上学吗？比如假装生病或者找借口不去？",
    "一个人出门的时候，你会觉得害怕吗？比如去超市买零食？",
    "一个人在教室或家里等人的时候，你会不会觉得有点害怕？",
    "有时候你会突然觉得难过吗？比如看动画片突然哭了？",
    "最近你是不是经常觉得没力气，不太想动？",
    "如果有特别开心或难过的事发生，你会有很强烈的感觉吗？比如生日收到礼物或玩具坏了？",
    "有时候你会不会觉得别人是不是在说你不好？比如有人看了你一眼，你会不会在意？",
    "你是不是经常需要别人帮忙？比如收拾书包、系鞋带？",
    "看到别人玩很酷的新玩具时，你会不会也特别想要一个？",
    "你是不是经常害羞，不敢举手发言或者参加活动？",
    "你会不会经常觉得自己不够好？比如考试没考好就觉得自己很失败？",
    "做决定的时候，你会不会犹豫很久？比如选午餐吃什么？",
    "你是不是有时候会坚持自己的想法，不太愿意听别人的意见？",
    "你有没有经常因为小事生气？比如同桌碰了你的铅笔？",
    "你更喜欢一个人安静玩，还是和大家一起玩游戏？",
    "和小朋友闹矛盾后，你会不会一直记着？比如他们没邀请你玩游戏？",
    "交新朋友对你来说难吗？比如转学后认识新同学？",
    "在班级活动时，你会觉得不自在吗？比如运动会开幕式？",
    "小组活动的时候，你会把东西和小伙伴一起用吗？还是更喜欢自己玩？",
    "和同学相处时，你会经常吵架吗？",
    "如果老师或家长批评你，你会不会想立刻解释或者反驳？",
    "如果别人误会了你，你会不会一直记在心里？比如被冤枉弄坏了东西？",
    "和异性同学相处时，你会觉得尴尬吗？比如借橡皮？",
    "比如比赛输了或事情没做好时，你会不会特别难过或者完全不生气？",
    "你是不是有时候会不小心打翻水杯、碰到别人东西？",
    "搬家或转学以后，你会不会觉得很难适应？",
  ],
  //儿童行为量表(CBCL) Achenbach 的社会能力部分-24
  6: [
    "你平时最喜欢做什么运动？可以告诉我你为什么喜欢它吗？",
    "你觉得你花在这些爱好上的时间多吗？和你的朋友相比，你是花得多一些，还是少一些，或者差不多呢？",
    "你觉得你的运动水平怎么样？和你的朋友们比起来，你是觉得你更厉害一些，还是差不多，或者还需要再努力呢？",
    "除了运动，你还有没有什么特别喜欢的爱好呀？比如喜欢看书、画画、听音乐，或者玩一些小游戏？可以和我分享一下吗？",
    "你花在这些爱好上的时间多吗？和你同龄的朋友比，你是花得多一些，还是少一些，或者差不多呢？",
    "你觉得这些爱好你做得怎么样？比如弹琴，你觉得自己弹得好不好听？和学同样爱好的小朋友比，你觉得你水平怎么样？",
    "在学校或者课外，你有没有参加什么社团、俱乐部或者兴趣小组呀？可以告诉我它们的名字吗？",
    "你在这些小组里表现得活跃吗？你喜欢发言、参与活动，还是更喜欢安静地听大家说呢？你觉得你比其他同学参与得多一些，少一些，还是差不多？",
    "你平时会在家里帮忙做家务吗？比如洗碗、扫地？或者有没有在外面帮人做过一些小事情，赚一点零花钱？可以和我说说吗？",
    "你觉得你做的这些事情做得好吗？比如你帮忙洗碗，洗得干不干净呀？和你的朋友们比，你觉得自己做得怎么样？",
    "你有很多好朋友吗？大概有多少个呢？可以告诉我你和朋友之间最近发生的一件有趣的事情吗？",
    "你和你的好朋友们一个星期会一起玩几次呢？是几乎每天都玩，还是一个星期玩一两次？",
    "你和家里的兄弟姐妹相处得怎么样？有没有哪些时候你们玩得很开心？有没有哪些时候会有点小矛盾？",
    "你和班里的同学或者其他小朋友相处得怎么样？你觉得大家喜欢和你一起玩吗？有没有你觉得相处起来比较困难的小朋友？",
    "你和爸爸妈妈相处得怎么样？你会听他们的话吗？有没有哪些事情你觉得他们做得特别好，或者你希望他们做得不一样？",
    "你平时自己写作业或者玩游戏的时候，觉得自己做得怎么样？是做得很好，还是差不多，或者还需要别人帮助呢？",
    "你觉得你在语文课上学得怎么样？是比较好，还是还可以，或者觉得有点吃力呢？",
    "那你觉得你在写作文、写字方面学得怎么样？喜欢写东西吗？",
    "数学课你学得怎么样？做算术题觉得难吗？",
    "拼音课呢？你觉得掌握得怎么样？",
    "除了这些，你还有没有其他科目特别喜欢或者学得很好的？或者有没有觉得比较困难的？",
    "你有没有在学校参加过特别的学习小组或者班级？比如为了学习某项技能或者帮助大家提高学习的？",
    "你在上学的过程中，有没有哪一年是重新读的，或者和比你小的同学在一个班级？是什么原因呢？",
    "你在学校里除了学习，有没有遇到过其他让你觉得困扰的事情？比如和同学相处，或者老师布置的任务？这些事情是什么时候开始的？现在解决了吗？",
  ],
  //儿童行为量表(CBCL) Achenbach 的行为问题部分-113
  7: [
    "你觉得自己平时和同学、朋友玩的时候，是像个小大人一样，还是更喜欢像个小朋友一样玩耍呢？可以举个例子说说吗？",
    "你的身体有没有觉得不舒服的时候，比如皮肤会痒痒的，或者鼻子会不舒服？是什么让你有这些感觉呢？",
    "你和别的小朋友意见不一样的时候，你通常会怎么做？你会坚持自己的想法，还是听听别人的呢？有没有为此和别人争论过？",
    "你的身体有没有不舒服的时候，比如会觉得呼吸有点困难，或者胸口有点闷？有去看过医生吗？",
    "你平时和男生/女生玩得更多吗？你觉得和他们一起玩有什么不一样的地方？",
    "你在学校或者外面玩的时候，有没有遇到过想上厕所但找不到厕所的情况？当时你是怎么做的？",
    "你有没有特别引以为傲的事情，很想告诉大家？你会怎么跟别人分享你的厉害之处呢？",
    "在学校上课或者写作业的时候，你有没有觉得有时候很难集中精神？你的思绪会飘到哪里去呢？你会怎么让自己重新集中注意力？",
    "有没有一些想法或者画面，会一直在你的脑海里，让你很难不去想它？是什么样的事情让你一直想着呢？这些想法会让你感觉怎么样？",
    "你觉得自己是那种喜欢一直动来动去的小朋友，还是更喜欢安静地待着呢？在课堂上或者家里写作业时，你会觉得很难坐住吗？",
    "你有没有觉得特别需要大人的帮助或者陪伴的时候？比如你遇到困难了，会马上找爸爸妈妈帮忙，还是自己先试着解决？",
    "你有没有觉得孤单的时候？比如身边没有玩伴，或者觉得没有人理解你？",
    "你有没有觉得有时候脑子会‘嗡嗡’的，或者感觉有点懵，听不清楚别人在说什么？",
    "你有没有特别想哭的时候？在什么情况下你会想哭？",
    "你平时喜欢小动物吗？有没有和小动物玩的时候不小心弄疼它们？",
    "你和别的小朋友玩的时候，有没有欺负过别人？或者有没有不愿意分享自己的东西？",
    "你有没有觉得自己有时候会发呆，或者脑子里想很多事情，好像在做白日梦一样？",
    "当你遇到很难过的事情时，你会怎么做来让自己好受一些？有没有觉得特别想伤害自己的时候？",
    "你有没有觉得特别希望别人注意到你，或者希望别人多关心你？你会怎么做来让别人注意到你呢？",
    "你有没有不小心把自己的玩具或者东西弄坏过？或者有时候心情不好，会把自己的东西扔掉或者弄坏吗？",
    "你有没有不小心把家里的东西弄坏过？或者有没有弄坏过别的小朋友的东西？",
    "在家里，有没有哪些时候你觉得爸爸妈妈让你做的事情你不想做？你会怎么告诉他们你的想法呢？",
    "在学校里，老师让你做的事情，有没有哪些时候你不太想做？你会怎么做呢？",
    "你有没有不喜欢吃的东西？吃饭的时候，你会不会经常不想吃或者吃得很少？",
    "你平时喜欢和别的小朋友一起玩吗？有没有时候你不想和他们一起玩，想一个人待着？",
    "当你做错了事情，有没有觉得心里有点不舒服或者后悔？",
    "你有没有觉得有时候会羡慕别的小朋友，希望自己也能拥有他们有的东西？",
    "你有没有吃过一些不是食物的东西？比如纸屑、泥巴？",
    "除了上学，你有没有特别害怕的动物、地方或者事情？比如害怕小狗，害怕黑的地方？",
    "你喜欢上学吗？有没有觉得有时候很害怕去学校？",
    "你有没有觉得自己脑子里会冒出一些不好的想法，或者害怕自己会做坏事？",
    "你觉得自己做事情是不是一定要做到最好，一点错误都不能有？",
    "你有没有觉得没有人喜欢你，或者大家都不愿意和你玩？",
    "你有没有觉得别人是故意捉弄你，或者故意让你不开心？",
    "你有没有觉得觉得自己没有用，或者觉得自己不如别人？",
    "你平时是不是很容易摔倒或者碰到哪里？有没有经常把自己弄伤？",
    "你和小朋友玩的时候，有没有发生过争吵或者打架的情况？当时发生了什么？你是怎么处理的？",
    "你有没有觉得经常被别的小朋友开玩笑或者嘲笑？",
    "你有没有一些朋友，他们平时会做一些让你觉得是‘麻烦’的事情？你喜欢和他们一起玩吗？",
    "你有没有听到过一些声音，但是别人都说没有听到？是什么样的声音呢？",
    "你有没有时候会突然想做什么就做什么，没有好好想一想？或者说话做事比较冲动？",
    "你平时喜欢一个人玩，还是更喜欢和大家一起玩？",
    "你有没有对爸爸妈妈或者老师说过谎？或者为了某种目的欺骗过别人？",
    "你平时有没有咬指甲的习惯？",
    "你有没有觉得有时候自己很容易紧张或者很激动？在什么情况下你会这样？身体会有什么感觉吗？",
    "你的身体有没有一些不自觉的动作，比如眼睛会眨得很快，或者脖子会动一下？",
    "你有没有晚上做过让你觉得害怕或者不开心的梦？",
    "你有没有觉得别的同学不喜欢你，不愿意和你玩？",
    "你有没有觉得上厕所比较困难，或者好几天才上一次大号？",
    "你有没有特别害怕或者担心的事情，让你心里一直不舒服？",
    "你有没有觉得头晕晕的，或者有点站不稳？",
    "你有没有做过让你觉得特别内疚或者自责的事情？",
    "你有没有觉得有时候会吃很多东西，停不下来？",
    "你有没有觉得特别累，就算睡了很久也还是觉得没有精神？",
    "你觉得自己的体重怎么样？有没有觉得自己比其他小朋友胖一些？",
    "你的身体有没有觉得不舒服的地方，但是又不知道为什么会这样？比如肚子疼、头疼，或者眼睛不舒服？",
    "你有没有打过别人或者推过别人？",
    "你有没有挖鼻孔、抠皮肤或者做一些重复的身体小动作？",
    "你有没有在公共场合触摸自己的隐私部位？",
    "你有没有在家里或者自己一个人的时候，经常触摸自己的隐私部位？",
    "你觉得自己的学习怎么样？有没有觉得有些科目比较难，跟不上进度？",
    "你有没有觉得自己身体不太灵活，比如跑步跳绳的时候会比其他小朋友慢一点或者不稳？",
    "你平时喜欢和比你大的哥哥姐姐玩，还是和同龄的小朋友一起玩得更多？",
    "你平时喜欢和比你小的弟弟妹妹玩，还是和同龄的小朋友一起玩得更多？",
    "你有没有时候不想说话，或者觉得很难把自己的想法说出来？",
    "你有没有一些动作或者习惯，会不断地重复做，比如反复开关门，或者反复洗手？",
    "你有没有离开过家，自己一个人到外面去？",
    "你有没有时候会突然大声叫喊或者尖叫？在什么情况下你会这样？",
    "你有没有一些心事或者秘密，不愿意告诉爸爸妈妈或者老师？",
    "你有没有看到过一些东西，但是别人都说没有看到？是什么样子的呢？",
    "你有没有时候在别人面前会觉得不自在，或者很容易害羞、尴尬？",
    "你有没有玩过火柴或者打火机？",
    "你有没有一些关于身体或者性别的困惑？",
    "你有没有特别喜欢向别人炫耀自己，或者有时候会很调皮、很胡闹？",
    "你有没有时候会觉得很害羞，或者有点胆小，不敢尝试新事物？",
    "你晚上睡觉时间是不是比其他小朋友少一些？",
    "你晚上睡觉时间是不是比其他小朋友多一些？",
    "你有没有玩弄过自己的大便？",
    "你有没有觉得说话的时候不太顺畅，比如会口吃，或者别人听不清楚你说的话？",
    "你有没有时候会眼睛直直地看着前面，好像在发呆，叫你也没有反应？",
    "你有没有在家里偷偷拿过别人的东西？",
    "你有没有在外面，比如商店或者同学家里，偷偷拿过别人的东西？",
    "你有没有收集一些东西，但是这些东西好像不太有用，而且家里也放不下了？",
    "你有没有做过一些让别人觉得很奇怪的举动或者事情？",
    "你有没有一些想法，觉得很特别，或者别人听了会觉得有点奇怪？",
    "你有没有时候会特别坚持自己的想法，不愿意改变？或者很容易生气，板着脸？",
    "你的心情会不会突然一下子变得很好，一下子又变得很糟糕？",
    "你有没有时候会突然很生气，对别人发脾气？",
    "你有没有觉得有时候会怀疑别人说的话是真的还是假的？或者觉得别人好像有什么事情瞒着你？",
    "你有没有说脏话或者骂人的时候？或者有没有骂过别人？",
    "你有没有说过‘不想活了’这样的话，或者告诉别人你不想在世上了？",
    "你晚上睡觉的时候，有没有说过梦话？或者有没有在睡觉的时候起来走动，但是自己不知道？",
    "你平时是不是很喜欢说话？有时候会说很多很多话，停不下来吗？",
    "你有没有经常开别人玩笑，或者故意捉弄别人？",
    "你有没有时候会突然发很大的脾气，或者很容易生气？",
    "你有没有觉得脑子里经常会想到一些和身体、性别有关的问题？",
    "你有没有对别人说过一些很凶的话，或者威胁过别人？",
    "你有没有吸吮手指的习惯？比如吸大拇指？",
    "你有没有特别喜欢把东西整理得干干净净，或者对卫生要求很高？",
    "你晚上睡觉好不好？有没有觉得很难入睡，或者睡得不安稳？",
    "你有没有没有去学校上课，但是没有告诉爸爸妈妈或者老师？",
    "你有没有觉得平时不太喜欢动，或者做事情比较慢，没什么精神？",
    "你有没有觉得心情不好的时候？什么时候会觉得闷闷不乐或者很伤心？你会怎么让自己开心起来呢？",
    "你平时说话声音是不是比其他小朋友大很多？",
    "你有没有喝过酒，或者尝试过一些奇怪的、让你感觉不一样的药片或东西？",
    "你有没有在学校或者外面，不小心把公共设施或者别人的东西弄坏过？",
    "你白天有没有尿湿裤子，但是自己没有控制住的情况？",
    "你晚上睡觉的时候有没有尿床？",
    "你有没有遇到一点小事就会很难过，然后和别人哭诉的情况？",
    "你有没有希望自己变成男生或者变成女生？",
    "你有没有觉得自己很孤单，或者不太喜欢和大家一起玩？",
    "你有没有很多让你担心的事情，让你心里总是装着很多烦恼？",
    "除了我们刚才聊到的，你还有没有什么其他想告诉我，但是我们还没有聊到的问题或者困扰吗？",
  ],
};

const testId = parseInt(getQueryParam("test")) || 1;
const questions = questionBanks[testId] || questionBanks[1];

let current = 0;
let recordingState = 0; // 0 = 未录音，1 = 录音中

// DOM元素
const numberElem = document.getElementById("question-number");
const textElem = document.getElementById("question-text");
const replyBtn = document.getElementById("reply-btn");
const gray = document.getElementById("gray");
const countdownElem = document.getElementById("countdown");
const progressBar = document.getElementById("progress-bar");
const nextImg = document.getElementById("next-img");
const nextText = document.getElementById("next-text");

const replyText = replyBtn.querySelector(".btn-text");
const waveContainer = replyBtn.querySelector(".audio-wave-container");

let mediaRecorder = null;
let videoChunks = [];
let stream = null;
let countdownTimer = null;

let audioContext = null;
let analyser = null;
let dataArray = null;
let source = null;
let animationId = null;
let waveBars = [];

const totalBars = 40;

// 保存所有录制的视频 Blob
const allVideoBlobs = [];

/**
let hasSpoken = false; // 全局控制每题只读一次
function speakOnce(text) {
  if (hasSpoken || !text) return;
  hasSpoken = true;
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);

    // 可选：设置中文声音
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find((v) => v.lang.startsWith("zh")) || null;

    utterance.onend = () => {
      // 如果需要，可以在这里允许下一次朗读
      // 例如切题后清除 hasSpoken 标志
    };

    speechSynthesis.speak(utterance);
  }
}
// 离开页面时停止朗读（包括刷新、关闭、跳转）
window.addEventListener("beforeunload", () => {
  if (speechSynthesis && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
});

// 如果你用的是 SPA 或有可能用户跳转但页面没刷新，也可以用 pagehide（更兼容）
window.addEventListener("pagehide", () => {
  if (speechSynthesis && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
});
**/

// 显示题目
function showQuestion(index) {
  if (index < questions.length) {
    numberElem.innerText = index < 9 ? `0${index + 1}` : `${index + 1}`;
    textElem.innerText = questions[index];
    updateUIForState(0);
    updateProgress(index, questions.length);

    // 重置朗读标志
    hasSpoken = false;
    // 朗读当前题目文本
    speakOnce(questions[index]);
  } else {
    numberElem.innerText = "完成";
    textElem.innerText = "答题完成，感谢参与！";
    replyBtn.style.display = "none";
    showNextButton(false);
    updateProgress(questions.length, questions.length);
  }
}

// 更新进度条
function updateProgress(index, total) {
  const percent = ((index + 1) / total) * 100;
  progressBar.style.width = percent + "%";
}

// 控制下一题按钮显示
function showNextButton(show) {
  const display = show ? "inline-block" : "none";
  nextImg.style.display = display;
  nextText.style.display = display;
}

// 创建波纹柱子
function createAudioWaveBars() {
  if (!waveContainer) return;
  waveContainer.innerHTML = "";
  waveBars = [];
  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement("div");
    bar.className = "audio-wave";
    waveContainer.appendChild(bar);
    waveBars.push(bar);
  }
}

// 启动波纹动画
function startAudioVisualization() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 64;
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
  source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  if (waveBars.length === 0) createAudioWaveBars();

  if (replyText) replyText.style.display = "none";
  waveContainer.style.display = "flex";

  function animate() {
    animationId = requestAnimationFrame(animate);
    analyser.getByteFrequencyData(dataArray);

    const mid = totalBars / 2;
    for (let i = 0; i < mid; i++) {
      let leftIndex = Math.floor(
        bufferLength / 2 - i * (bufferLength / (2 * mid))
      );
      let rightIndex = Math.floor(
        bufferLength / 2 + i * (bufferLength / (2 * mid))
      );

      leftIndex = Math.min(Math.max(leftIndex, 0), bufferLength - 1);
      rightIndex = Math.min(Math.max(rightIndex, 0), bufferLength - 1);

      const leftVal = dataArray[leftIndex];
      const rightVal = dataArray[rightIndex];

      const leftHeight = Math.max(5, (leftVal / 255) * 80);
      const rightHeight = Math.max(5, (rightVal / 255) * 80);

      waveBars[mid - 1 - i].style.height = leftHeight + "px";
      waveBars[mid - 1 - i].style.backgroundColor = `rgba(255,0,0,${
        0.3 + (leftVal / 255) * 0.7
      })`;

      waveBars[mid + i].style.height = rightHeight + "px";
      waveBars[mid + i].style.backgroundColor = `rgba(255,0,0,${
        0.3 + (rightVal / 255) * 0.7
      })`;
    }
  }
  animate();
}

// 停止波纹动画
function stopAudioVisualization() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
  waveBars.forEach((bar) => {
    bar.style.height = "5px";
    bar.style.backgroundColor = "rgba(255, 255, 255, 0.67)";
  });
  if (replyText) replyText.style.display = "inline";
  if (waveContainer) waveContainer.style.display = "none";
}

// 更新UI根据录音状态
function updateUIForState(state) {
  recordingState = state;
  if (state === 0) {
    replyBtn.disabled = false;
    if (replyText) replyText.style.display = "inline";
    if (waveContainer) waveContainer.style.display = "none";
    showNextButton(false);
  } else if (state === 1) {
    replyBtn.disabled = true;
    if (replyText) replyText.style.display = "none";
    if (waveContainer) waveContainer.style.display = "flex";
    showNextButton(true);
  }
}

// 开始倒计时并录制视频
function startCountdownAndRecord() {
  let count = 3;
  countdownElem.textContent = count;
  gray.classList.remove("hidden");
  replyBtn.disabled = true;

  countdownTimer = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(countdownTimer);
      gray.classList.add("hidden");
      startRecording();
    } else {
      countdownElem.textContent = count;
    }
  }, 800);
}

// 开始录制视频
async function startRecording() {
  try {
    if (!stream) {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    }

    const videoPreview = document.getElementById("video-preview");
    if (videoPreview) {
      videoPreview.srcObject = stream;
    }

    mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm; codecs=vp8,opus",
    });
    videoChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        videoChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const videoBlob = new Blob(videoChunks, { type: "video/webm" });
      allVideoBlobs.push(videoBlob);
      console.log(
        `第${current + 1}题视频录制完成，大小: ${videoBlob.size} 字节`
      );
    };

    mediaRecorder.start();
    updateUIForState(1);
    startAudioVisualization();
  } catch (err) {
    alert("请允许访问摄像头和麦克风！");
    replyBtn.disabled = false;
    showNextButton(false);
    updateUIForState(0);
  }
}

// 暂停录制视频（停止MediaRecorder）
function pauseRecording() {
  return new Promise((resolve) => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(videoChunks, { type: "video/webm" });
        allVideoBlobs.push(videoBlob);
        console.log(
          `第${current + 1}题视频录制完成，大小: ${videoBlob.size} 字节`
        );
        stopAudioVisualization();
        updateUIForState(0);
        resolve(); // 停止完成，Promise 解决
      };
      mediaRecorder.stop();
    } else {
      stopAudioVisualization();
      updateUIForState(0);
      resolve(); // 没在录制，直接解决
    }
  });
}

// 导出所有录制的视频文件（多个文件）
async function exportAllVideos() {
  if (allVideoBlobs.length === 0) {
    alert("没有录制到任何视频");
    return;
  }

  const zip = new JSZip();

  allVideoBlobs.forEach((blob, idx) => {
    const filename = `test_${testId}_question_${idx + 1}.webm`;
    zip.file(filename, blob);
  });

  try {
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = `test_${testId}_videos.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    alert("生成压缩包失败：" + err);
  }
}

// 进入下一题
async function goToNextQuestion() {
  if (recordingState !== 1) return;
  await pauseRecording(); // 等待录制停止完成

  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    exportAllVideos();
    // 页面淡出跳转
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = `testover.html?test=${encodeURIComponent(testId)}`;
    }, 800);
  }
}

// 事件绑定
replyBtn.addEventListener("click", () => {
  if ("speechSynthesis" in window && speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  if (recordingState === 0) {
    startCountdownAndRecord();
  }
});

nextImg.addEventListener("click", goToNextQuestion);
nextText.addEventListener("click", goToNextQuestion);

// 初始化
window.onload = () => {
  showQuestion(current);
  updateUIForState(0);
  createAudioWaveBars();
};
