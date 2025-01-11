import './Lots.css'; // Import the CSS file for styling

const lotsData = [
  {
    number: 1,
    title: "The starting. All elements are in harmony. Season is good. The very core of all things. The consent and facour of the rulers.",
    description: "Do not be reckless. In due course all will be well. Thus is the advice of the Buddha."
  },
  {
    number: 2,
    title: "A baby whale is dependent soon after birth. When it is in full growth, it becomes independent and roam the ocean.",
    description: "Be patient. Act as your are capable. Success will follow.",
  },
  {
    number: 3,
    title: "A silly bird woh attemped to build a nest of mud although it is socked to the skin and tossed by the wind. The rain finally washes away the nest.",
    description: "The mind is not free of worries day and night. To act will bring misfortune."
  },
  {
    number: 4,
    title: "Imagine a mirror one thousand years old were to brighten again.",
    description: "Time to change to new ways so that the family status will progress. Future generation might benefit 5 x 5 = 25. One can succeed the one could not stop working. Hope is high.",
  },
  {
    number: 6,
    title: "A gorge where even a good flyer bird would not fly into, unless it seeks to die.",
    description: "A matyr is indeed rare. One must first die before one can be called on. Be prepared for the impossible if you seek to undertake what you are hoping to do. Worrying and thoughts tend to confuse. Tranquil mind will suceed. Success if achieve is great.",
  },
  {
    number: 7,
    title: "A dangerous journey undertaken. The one is sodden and caked with mud yet one attempts to scale a slippery mountain. One is likely to creash and get hurt. No more journeys to travel as a result.",
    description: "Best to stick to present situation for to carry on would be bad. Have no hope for betterment yet."
  },
  {
    number: 8,
    title: "A pine tree grow more beautiful as it ages. No natural element such as wind, rain, snow could harm it. Besides, its wood is excellent for beam construction. To receive this chiam is a good omen.",
    description: "The coast is clear. Your deeds please people. Your efforts get good return. Joy, peace and stability for the family.",
  },
  {
    number: 9,
    title: "Heart and mind must be pure, be not selfish. Observe the precepts for Buddha never lied when he talked of Kama.",
    description: "Do not be selfish lest you be prosecuted. Only goodwill follow you if you are good to others and your career."
  },
  {
    number: 10,
    title: "Jades are found in rocks. A fool would seek elsewhere. A fool too would borrow a light when he is in possession of matches yet he knew not that fire is obtained from their usage.",
    description: "Make hay while the sun shines. Be alert to take advantage of the right situation and be selective lest you make mistakes.",
  },
  {
    number: 11,
    title: "This task is not simple. Neither is it small. Friendship too is similar. It needs nourishing. An arrow will reach its target only after proper skill at aiming. There is hope for help.",
    description: "Proper effort will lead to success. A Benefactor is likely to render service.",
  },
  {
    number: 12,
    title: "One foot lies between you and success. By progressive stages, does a good man reach prosperity. Harvest is dawning. Peace of mind will prevail after the boat of worries.",
    description: "Sack-cloth turns to silk to cling to your feet. In time, will you understand as one lives, one flourishes."
  },
  {
    number: 13,
    title: "Being born in a rich home, one becomes accustomed to luxury. The Ruler bestows one with power. The whole universe acclaim your virtue.",
    description: "The prisoner is free. Sickness cured. Having reached the Dragon-gate, one's name becomes famous."
  },
  {
    number: 14,
    title: "A stork upon being freed from captivity could fly to the four cordinal points, only the sky is the limit.",
    description: "One's thought is just as above. When one's on a smooth road so is one's desire. So too, is a man of ease."
  },
  {
    number: 15,
    title: "Panting due to walking. Upon seeing bad company, avoid them. A bird having lost its roost flies aimlessly seeking shelter.",
    description: "A person who follows wrong advice could not do right. He could not differentiate right from wrong, good from bad. Best to stick to present situation."
  },
  {
    number: 16,
    title: "A person whose eye brow touch each other, looks like a serious worried man. When the sun shines after the clouds have blown away, the future is bright. Even within dirt, lies a precious jade. A skillful person could retrieve it.",
    description: "An evil person beware, if you get this chiam. What is yours, is assured to be yours. Difficult at first, with proper applied skill, success follows.",
  },
  {
    number: 17,
    title: "Do not heed rumours. Be more pious. Lies will be accepted for truth. Can a picture of a cake taste and feel like a cake?",
    description: "One's mind is full of trouble. Even the Scriptures will be misunderstood. A picture of a cake could not be eaten.",
  },
  {
    number: 18,
    title: "The sun sets in the west. The moon rises in turn. Monks and Tradesman understood the cycle that is so from the beginning of time. People of various trade is content with their lot.",
    description: "Do not worry. Be firm and receive success. Like a well-aimed arrow, it meets the target.",
  },
  {
    number: 19,
    title: "Sailing through rapid storm blowing. How to navigate safety. Do not capsize. Wait till the elements are favourable.",
    description: "For the present moment, some difficulties. Be patient and wait a while."
  },
  {
    number: 20,
    title: "The spring is here, yet it still rains. When the rain stops, joy comes. The sun and moon gradually rises. The old gives way to the new. To see through this is like going through the Dragon gate. The God and Buddha aid you.",
    description: "The situation is right. Proceed. It is just the beginning.",
  },
  {
    number: 21,
    title: "Yin and Yang in perfect harmony. Heaven agrees. Bride meets groom in matrimony. The strong complement the weak.",
    description: "Do as you plan. In marriage a male offspring, fortune and crops increase.",
  },
  {
    number: 22,
    title: "Crops wither due to drought. The sky diety sends rain to cause the crops to become green again. This rainfall is better than all the Treasures of this world.",
    description: "Sillk and harvest three-fold fortune and time is good. Medical help to cure sickness. A safe return from travelling.",
  },
  {
    number: 23,
    title: "One reaches the gates of Heaven and an old friend lets one in through the well-guarded gate. One rides the clouds.",
    description: "Business facing some difficulties will flourish. Sickness cured. Civil cases won. Do as you planned."
  },
  {
    number: 24,
    title: "An unstable disrespectful person is liken to a flower whose petals have begun to fail. If you hope to continue, struggle hard. Many tasks still left after the struggle.",
    description: "Do not be bothered either a subject is true or false. Be alert in what you do. To succeed, keep a firm desire.",
  },
  {
    number: 25,
    title: "Success is here after worries. As your heart and mind is at peace, so will you see success. A Benefactor will assist you. Your arguments are proven right.",
    description: "Sickness will be cured. What you are attempting will produce a well giving sweet water.",
  },
  {
    number: 26,
    title: "Everything is topsy-turvy from top to bottom. They come crushing to nothing, yet from a distant good tiding, but upon closer inspection, the reverse is experienced.",
    description: "You could not seek peace of mind any way you tried. You hope to succeed. Stick to the present.",
  },
  {
    number: 27,
    title: "You hesitate to undertake a project although you have dwelled on it a long time. A Benefactor comes along and like a good solid wall, you can lean on him.",
    description: "Out with old. In with the new. Flowers bloom again in spring. Your performance seems meaningless, yet you'll find it suits you.",
  },
  {
    number: 28,
    title: "One's words is as temperamental as the moon. When clouds shield it, is not round or beautiful.",
    description: "Do not fear at the present. After circumstance change, all will be well again."
  },
  {
    number: 29,
    title: "An unsheathed sword will be bright if its sheath is clean. A wise man can see its beauty and began to appreciate it. In time, those around will do likewise.",
    description: "One is appreciated even from afar. A Benefactor comes along to teach. Future dealings lead to success."
  },
  {
    number: 30,
    title: "Do not seek trouble. Does a bird know that it is going to be shot when seeking wood, beware. Snakes might bite one to cause great agony.",
    description: "Shut up, grind your teeth, mind  your own business. If you have evil desire, you are likely to hurt yourself.",
  },
  {
    number: 31,
    title: "Find a quick place. Eat, drink and sleep. Rest your heart and mind. Do this to avoid trouble.",
    description: "Let things be. All will be well as a result. Be patient you who consult the Buddha as time. Success follows."
  },
  {
    number: 32,
    title: "Objects viewed from a distance is not clear. Do not worry. Liken onto Jade found in rocks. A skilled Jeweller will polish it after unearthing it, to present its beauty.",
    description: "Within rocks, blessings. Few knew this. Only when one fully understand the problem, then it is safe to go on."
  },
  {
    number: 33,
    title: "One's inner organ cannot be replaced. Futile to seek for them. Wait till a Benefactor who has skill, then will one cease to worry.",
    description: "One possess jewels, yet is ignorant about their value. A jeweller appraises it and then only one learns of its true value."
  },
  {
    number: 34,
    title: "The words and deeds of a cultured man is important to heed. If one is inattentive, one might misunderstood them. If one's heart is in the right place, then the sun is at its zenith.",
    description: "No trouble within oneself. Let one mind be pure and clear as the crystal water of the lake. Understanding will follow.",
  },
  {
    number: 35,
    title: "One thinks it is not proper to don ancient costume. Yet, it is appropriate ahead lies thorns and dirt. Sweep them off when 3 persons agree that it is so. Accept their verdict.",
    description: "Do not worry. Godd times are near. To benefit in future advance."
  },
  {
    number: 36,
    title: "Do not be perturbed by what is seen. One will achieve what one sought. Liken unto an escaped monkey, one can chart one's destiny.",
    description: "There is really no trouble. Rest your mind. Wait for a good chance, then you are free to advance further."
  },
  {
    number: 37,
    title: "One believes one is healthy, yet one's health is like a candle flame in the big breeze. To keep the candle burning, find a calm quiet place.",
    description: "Seek solitude in a calm quiet place to get away from the storm. If one is reckless, evil results. Best to stay as you are.",
  },
  {
    number: 38,
    title: "The moon is at the horizon but dark clouds over-shadow it. Wait for it to clear, then only success.",
    description: "Family in trouble. People have no peace. People might even use the Buddha's advice to cheat you."
  },
  {
    number: 39,
    title: "Do not heed tales coming from afar. Can a stone be turned to a mirror. One will waste much time and effort.",
    description: "Many futile attempts. Revert to the past situation. Do not seek trouble."
  },
  {
    number: 40,
    title: "The moon takes over from the sun. Ying is up, Yang descend. For a lady, all is well.",
    description: "The time for female dominance. What one hopes will be peace at first, followed by properity and success.",
  },
  {
    number: 41,
    title: "Do recall wise counsel. One takes a thief for a son. All good sights are mere illusion. In time, they revert back to their original state.",
    description: "Do not be deceived by one whom one thinks is good. Be alert in body and soul, so as to be out of danger.",
  },
  {
    number: 42,
    title: "An ancient sage giving instructions yet one still treats him as equal when speaking to him. Only by being earnest, all will be well on earth and in Heaven.",
    description: "The sky Diety gives you advice, from the beginning till the end. Forget not let your heart be firm at all times and do worship."
  },
  {
    number: 43,
    title: "Myriads of beings populate Heaven and earth. One should be content for as long as one pleases. This world is filled with wonders. What one does, is agreeable as one follows the wise.",
    description: "Give a good start to what one hopes to achieve. Luck and lasting beauty is upon you."
  },
  {
    number: 44,
    title: "Two people having a fight, a draw ensures. But before any of them slips no progress for the other. One must be careful not to make mistake and concentrate.",
    description: "To perform any task involves risk. To overcome the next person, or to lose, one must possess some skill over him, or hiim over you.",
  },
  {
    number: 45,
    title: "Be flexible in your ways. A good person will reap good rewards. To the lucky soul who gets this 'chiam', is like a very thirsty person getting water to drink.",
    description: "Providence is compassionate. Common beings have not. The Gods and Buddha will aid you. Do not be foolish and forget them."
  },
  {
    number: 47,
    title: "Adding color to a gold work, and more beauty emerges. In due course, wealth and health comes. Do not think, patience is best. In due course, the whole world knows you.",
    description: "Do away with the old stage. A child being guided by wise parents. Suit yourself in your endeavours. Your likelihood is assured.",
  },
  {
    number: 48,
    title: "A fledgeling soon grows to be a mighty bird. It then flies to heights, other birds could not attain.",
    description: "One is lucky to get this prediction. Every good thing comes naturally.",
  },
  {
    number: 49,
    title: "The sky is cold, the ground shivered while water freezes. Do not be greedy lest people took you for a miser. Do according to your real worth. By and by, all will be well.",
    description: "Ice melts and freeze again. Hoping to achieve something, it is futile."
  },
  {
    number: 50,
    title: "One have access to the four seas and five lakes. When sailing your mast is straight with the trade-wind guiding it. Your ship is loaded with precious stuff.",
    description: "One's livelihood is good. The one spends no effort, yet one have lots of joy and money.",
  },
  {
    number: 51,
    title: "Days are longer after Autumn. People tend to get sick. Providence all knowing, breathe forth a gentle breeze.",
    description: "What you hoped to achieve, do so. As you go on, good times come. Do not be reckless and observe caution.",
  },
  {
    number: 52,
    title: "Trying to catch the reflection of the moon is futile. Do not heed advice lest you be deceived and end up trusting no one.",
    description: "You cannot understand what you hear. You will not get returns for your effort. It will breed frustration. Perchance a Benefactor can solve your problem."
  },
  {
    number: 53,
    title: "Bad days become good unexpectedly. The Dragon sings while the tiger sings in compliment. There is a route to Heaven. Your hopes will be fulfilled.",
    description: "If told to do, act at once. If told to stop, stop. Do this and it will bring happiness. All your work is good."
  },
  {
    number: 54,
    title: "One awake from a dream about money one presume one can own a mountain but one already have a spade in hand. If you consult about marriage or sickness, best to revert to new means or change partners.",
    description: "Reflections on water tends to distort. Look properly before one makes decision. Be very careful."
  },
  {
    number: 55,
    title: "Father's wisdom descends down his family line. By the blessings of the God, food and clothing are plenty. The Ancestral hall is filled with joy. Eat, sleep, be happy.",
    description: "Bamboo pipe conveying water towards one. The deeds of the superior man pleases you.",
  },
  {
    number: 56,
    title: "The water bubbling at the rapids is caused by outcrop of rocks. A gentle breeze blowing out of a moonlit scene. A Benefactor at hand to help one seek the road. One will find it to pick flowers and herbs.",
    description: "One seek to achieve something. It will need trouble and effort. Best to seek to present situation. You will be peaceful.",
  },
  {
    number: 57,
    title: "News is like the wind. Food and apparel are beautiful. Do not brood about the past. Your thoughts are in agreement with me.",
    description: "For what you are praying, all is well. Do cultivate constant effort. Keep to the right way. One is liken to a child meeting mother.",
  },
  {
    number: 58,
    title: "Listen and remember. Do not seek other means of livelihood the money seems important. Stick to past situation. If you do not heed this, be prepared for bad times.",
    description: "Best to stop what one is doing and revert back. Do not involve in new ventures. In time, all is well."
  },
  {
    number: 59,
    title: "One takes refuge in a tall building. Thorn and thistle block the way. Heaven is high, yet no one can know the length of one's life. One have two friends. If one were to meet another person, the first two will desert.",
    description: "One is drunk, yet drinks again. Revert to the past when the time comes worries and calamity will cease."
  },
  {
    number: 60,
    title: "Trying to put out fire by means of wood. The fire burns even bigger. Do not worry about fortune, lest worse will come.",
    description: "One's thoughts dwell on 1,000 other things. One day one realise that it is futile. Be quiet and calm and all will be well."
  },
  {
    number: 61,
    title: "The rising of the moon is like poems. It declines like the end some scenario of a concert. When one meets friends, it is unavoidable. Plenty of hand-shakes.",
    description: "A pretty maid singing, one feels glad. Yet one's life seems to be lucky."
  },
  {
    number: 62,
    title: "The Buddha blesses one, day and night. All eveil is removed. Luck is on your side, whilst a Benefactor comes to help you.",
    description: "Your life is level and peaceful. Your name reaches the four quarters of the world. The time is ripe for new ventures."
  },
  {
    number: 63,
    title: "One searches for a needle that fell into the sea long ago while sailing, is futile. This will cause one to waste time and get trouble only. No reward.",
    description: "Luck and fortune must have a good foundation, one rely on. One must have merit to deserve it. Would you heed things explained to you? Listen well before you act."
  },
  {
    number: 64,
    title: "A fish swimming in a puddle of water while nets are around it. It tries to escape, but to no avail. Only trouble is the lot of one who seeks information.",
    description: "One remainds at home, yet the sea rains at one from the sky. Be prepared for the worse."
  },
  {
    number: 65,
    title: "Do not be deceived by happy sights. You see no danger why hurt yourself by cutting your own flish. Best to settle old score.",
    description: "Be content and stop if you should. Loosen yourself if you need to loosen. One is hurting one's self."
  },
  {
    number: 66,
    title: "The road is narrow while the horse is lame. A pedestrain weary like a vanquished soldier who has lost its comrades. The mast snapped and the ship wrecked. The sun darken, flowers die, snow falls.",
    description: "Best to do as you are doing now. Be quiet and you experience peace. Do not hope for good results. Best to forget your problem."
  },
  {
    number: 67,
    title: "A single strand of gold thread gladen one's heart. one is at one with the universe. Be a fair man so that one's status will heighten and one's achievement will be accepted and understood.",
    description: "One is at peace, be fair. One should prosper. Do not be greedy and seek your contentment to enjoy earth's peace.",
  },
  {
    number: 68,
    title: "A good home where peace and happiness abound. By deeds of merits will they achieve peace. The time is right for marrying. The farm produces a good crop of silk and harvest. A remedy to cure all illness.",
    description: "The day is cool and fine with myriad of flowers blooming. Why do you fret when what you seek will soon be yours?",
  },
  {
    number: 69,
    title: "The peony plant is bare now, yet, from a single bud will spring forth new shoots and new blooms of unmatched beauty next season.",
    description: "One's aim will be accomplished although it seems futile at first. One shoots an arrow to reach the void, but one could not succeed. Finally, one does reach it.",
  },
  {
    number: 71,
    title: "An ancient Dragon leaves earth for the sky. A loose girl married to two males. Two arrows shot from one bow. Perhaps by the time of Dragon and Horse, will there be peace.",
    description: "One has lots of worry. Providence knows all. Best to let things be for the time being and be cautious."
  },
  {
    number: 72,
    title: "One raise bees for honey. Beware one might get stung. One upon reaching a cross road does not know which route to take. Darkness descend on one while thorns and creepers block one's path.",
    description: "Observe caution in your dealings. Do not be stubborn. To gather good times is like a swarm of bees gathering honey."
    },
  {
    number: 73,
    title: "A good home where peace and happiness abound. By deeds of merits will they achieve peace. The time is right for marrying. The farm produces a good crop of silk and harvest. A remedy to cure all illness.",
    description: "The season took a good turn. Plenty of good things. One day a great happening occur to even reach Heaven.",
  },
  {
    number: 74,
    title: "A pigeon flies to its roost to find itself trapped. No escape from east, west, north, south. To get this prediction is a bad omen.",
    description: "To achieve anything needs great effort and concentration. But even to achieve former status is hard. Best to bow one's head and hope for betterment.",
  },
  {
    number: 75,
    title: "One carries a ferocious tiger and climbs a steep mountain. One is very worried about one's safety. Tired and drained of courage, one reaches a safe place. Abandon the litter and retreat at the first opportunity.",
    description: "One enquires about one's fate. Danger lurks to the front. No success except bad times."
  },
  {
    number: 76,
    title: "Fishes and Dragons in a pond. They bide for time to reach the Dragon-gate. Some already have horns. In due course, they will leap the Dragon-gate.",
    description: "One should have luck in future. Be cautious for the present and be not reckless. Wait."
  },
  {
    number: 77,
    title: "One dreams of wealth and status. Pop goes the dream like smoke. The endless sea and space do not accept one as rich. Wait till a Benefactor comes to help you.",
    description: "Do not hope for non-existent object and objectives. Work for success in a more concrete and genuine way.",
  },
  {
    number: 78,
    title: "Water put on fire to boil. It is medium hot just nice to drink. For travelling or new approach, it is the right time as one gains approval and will have the means.",
    description: "One is free. Sickness will be cured by a skilled doctor. Luck is around.",
  },
  {
    number: 79,
    title: "Having made a vow one obtains success. But one forgets the Buddha's favour. Do not doubt the Buddha nor offend Him.",
    description: "One thinks one could achieve something. Do not be troubled Kwan Yin tells  you doubt not. Heed the advice.",
  },
  {
    number: 80,
    title: "One's thought have reached the sage on the mountain. Come one day, an Edict comes to raise one's status. The planets yen the whole galaxy shine for you while people praise you.",
    description: "One is disciplined. Advance on your new ventures. There are many Benefactors around to aid."
  },
  {
    number: 81,
    title: "Trees are barren of leaves in Autumn. Return journey always seems faster. Thanks to Heaven's grace. A ship sails faster with the wind blowing in the right direction.",
    description: "Heaven will give their blessing to what you seek. Proceed with what you are hoping to do."
  },
  {
    number: 82,
    title: "A huge bonfire with flames leaping up to the skies. Yet in the midst lies a lotus plant complete with flowers, roots, leaves, stems. It is not touched by the flammes.",
    description: "Though one meets danger, yet no harm. A Benefactor will aid one in what one hopes to achieve."
  },
  {
    number: 83,
    title: "On the 1st day of the month, the moon is merely a thin strip. On the 15th day, it becomes round and bright.",
    description: "Wait till the time comes. Be patient."
  },
  {
    number: 84,
    title: "One seeks power by usuption and deceits. One has no qualification for the post. Good turns to bad. Like a drunk one could not differentiate various forms of trees.",
    description: "Like a fish out of water. Good is not actually good. Forget what you hope to do."
  },
  {
    number: 85,
    title: "A mist blocking the path. Wait till it clears. A student falls asleep. A Benefactor will point the way.",
    description: "An elder person had best wait till Spring comes when their luck is due.",
  },
  {
    number: 86,
    title: "Myriads of flowers bloom to fill the house. From 10,000 li becomes gold for you. A carp jumps through three Dragon gate to become a Dragon. A sudden burst of good men issue from the earth.",
    description: "The king bestows one with honour. A very poor person receive a priceless treasure. Be content, this is indeed a good prediction.",
  },
  {
    number: 87,
    title: "Dusk is here, yet one is still half-way up the hill. One is surrounded by the wilderness. One begs for protection from the Gods. One is actually dangling in mid-air.",
    description: "Jade is mined by crackling open huge rocks. Whilst gold dust is obtained by panning dirty. To do anything, use maximum effort and be firm.",
  },
  {
    number: 88,
    title: "One places carved wooden tiger at the front of one's door. Although one is assured that it is just a piece of wood, yet one shivered in fear.",
    description: "Running out of fuel for the fire, one feeds the fire with snow. Even the wind does not enter one's ear. Seek Buddha's help in time all will be well."
  },
  {
    number: 89,
    title: "One is well within and without. A valuable jade in the rock. A benefactor points the way to obtain it. Everyone rejoices at your good fortune.",
    description: "A benefactor points out how to achieve it. Heed him. To achieve the prossession of the jade will surely gladden one's heart.",
  },
  {
    number: 90,
    title: "Glad tidings come from above. All of a sudden, treasures of Mt. Tai at your disposal. To inquire or marvel at this good news, best to proceed as many helpers are around.",
    description: "One should have many helpers as one will have lots of food, money, clothing, etc.",
  },
  {
    number: 91,
    title: "One frets hoping for the best, one faces good times, luck, etc. A big wide horizon open for you. Suit yourself in what you hoped to do.",
    description: "Proceed with what you want to achieve. All is well."
  },
  {
    number: 92,
    title: "One being independent from young. Luck and good fortune comes naturally. From a minor to senior to reach top grade in the Imperial exams.",
    description: "From young to old, life is good. Suit yourself. Success follows."
  },
  {
    number: 93,
    title: "A crane and phoenix look ugly when battered by the rain. The sparrow mocks them, but come the sun, and their plumage are radiant once more.",
    description: "Evil man is found everywhere. A wise man would not interfere with them. Silence is golden. Wait till the time is due."
  },
  {
    number: 94,
    title: "A good lord must not listen to bad advice from the wicked last he gets into trouble by making one single mistake. Only a person who appreciates music can listen to the melody of the lute.",
    description: "One's thoughts must be agreeable with each other. Do not cause trouble. Wait till a Benefactor comes along."
  },
  {
    number: 95,
    title: "You have high hopes and find pleasure in wordly ways. You are destined to meet a Golden-Rooster to point for you the way where gold, etc. are found.",
    description: "You having meditated deeply in time all will be well. The Golden Rooster will help you."
  },
  {
    number: 96,
    title: "A pagoda being erected at a great cost. It gleams from every angle. Be a bit more pios and pray. Heaven will bless you for what you are doing.",
    description: "You have luck. People see it. Do not worry. Many good times are ahead.",
  },
  {
    number: 97,
    title: "A candle being lit in the breeze. A flowering tree with flowers raining from it. Children gather it to play. This is not reality.",
    description: "One is fated to be rich or poor. Poor and hardship do not contemplate on them."
  },
  {
    number: 98,
    title: "You try to attempt something yet you fret and you fear you create trouble for yourself. You are a trapped bird. You will not succeed as ou are not decisive. Best to stay where you are.",
    description: "Wait till a Benefactor comes to assist you. In asking for things, be patient."
  },
  {
    number: 99,
    title: "One is late. One spurs the steed to hurry. One worries. One is liken to a house being razed to the ground. A great deluge wash it away the remains.",
    description: "One had a hard life. No good times. Do not meddle in people's affairs. People will only give you trouble. Misfortune comes naturally for you."
  }
];

const Lots = () => {
  return (
    <section className="lots-section">
      <h2>Goddess of Mercy Lots 观音签</h2>
      <p>
        The temple offers a unique tradition of divination using the Goddess of Mercy lots.
        Below is a list of the 100 sacred lots along with their meanings and guidance.
      </p>
      <div className="lots-container">
        {lotsData.map((lot) => (
          <div key={lot.number} className="lot-card">
            <h3>Lot {lot.number}: {lot.title}</h3>
            <p>{lot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lots;
