const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.MoveTo,
		C3.Behaviors.LOS,
		C3.Behaviors.EightDir,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Behaviors.Tween,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Plugins.PlaygamaBridge,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.PlatformInfo,
		C3.Behaviors.Platform,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Acts.SetMasterVolume,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Browser.Acts.ExecJs,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.PlatformInfo.Cnds.IsOnMobile,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.EightDir.Acts.Stop,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Behaviors.Bullet.Cnds.OnStep,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.MoveTo.Acts.SetMaxSpeed,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Behaviors.EightDir.Acts.SetMaxSpeed,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.PlaygamaBridge.Acts.AppendStorageDataSetRequest,
		C3.Plugins.PlaygamaBridge.Acts.SendStorageDataSetRequest,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.PlaygamaBridge.Acts.ShowInterstitial,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.PlaygamaBridge.Cnds.OnInterstitialOpened,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.PlaygamaBridge.Cnds.OnInterstitialLoading,
		C3.Plugins.PlaygamaBridge.Acts.AppendStorageDataDeleteRequest,
		C3.Plugins.PlaygamaBridge.Acts.SendStorageDataDeleteRequest,
		C3.Plugins.PlaygamaBridge.Cnds.OnStorageDataDeleteRequestCompleted,
		C3.Plugins.PlaygamaBridge.Cnds.IsLastActionCompletedSuccessfully
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{BackgroundTileMap: 0},
	{ForegroundObjectsTileMap: 0},
	{Middle: 0},
	{Obstacles: 0},
	{EnemyUID: 0},
	{bat: 0},
	{Pin: 0},
	{drag: 0},
	{currentHealth: 0},
	{state: 0},
	{enemyType: 0},
	{maxHealth: 0},
	{MoveTo: 0},
	{LineOfSight: 0},
	{EnemyCollision: 0},
	{EnemySpawnPoint: 0},
	{bluebat: 0},
	{fly: 0},
	{VampireBoss: 0},
	{AdultRed: 0},
	{Ronin: 0},
	{Tengu: 0},
	{Oni: 0},
	{Kappa: 0},
	{Skelton: 0},
	{Cyclops: 0},
	{Goblin: 0},
	{Ogre: 0},
	{Grif: 0},
	{Pala: 0},
	{Demon: 0},
	{Genie: 0},
	{Gog: 0},
	{Hell: 0},
	{Sprite: 0},
	{State: 0},
	{"8Direction": 0},
	{PlayerCollision: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{Bullet: 0},
	{Speed: 0},
	{Ammo: 0},
	{damaage: 0},
	{Gun1: 0},
	{Tween: 0},
	{Night: 0},
	{GameOverFAde: 0},
	{Sprite10: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Down: 0},
	{Up: 0},
	{RightC: 0},
	{LeftC: 0},
	{Sprite2: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{SpriteFont: 0},
	{SpriteFont2: 0},
	{health: 0},
	{Death: 0},
	{PlayerSpeed: 0},
	{BulletSpeed: 0},
	{EnemySpeed: 0},
	{EnemyHealth: 0},
	{enemyHealthIncrease: 0},
	{EnemyDown: 0},
	{bulletUp: 0},
	{Bounce: 0},
	{bonus: 0},
	{negBonus: 0},
	{mystery: 0},
	{SpawnSlow: 0},
	{SlowSpeed: 0},
	{enemyExp: 0},
	{BestRecordText: 0},
	{DaysSurvived: 0},
	{DaysSurvivedText: 0},
	{DaysSurvivedText10: 0},
	{DaysSurvivedText11: 0},
	{DaysSurvivedText12: 0},
	{DaysSurvivedText13: 0},
	{DaysSurvivedText14: 0},
	{DaysSurvivedText15: 0},
	{DaysSurvivedText16: 0},
	{DaysSurvivedText2: 0},
	{DaysSurvivedText3: 0},
	{DaysSurvivedText4: 0},
	{DaysSurvivedText5: 0},
	{DaysSurvivedText6: 0},
	{DaysSurvivedText7: 0},
	{DaysSurvivedText8: 0},
	{DaysSurvivedText9: 0},
	{ItemMulti: 0},
	{PlayerHealth: 0},
	{TotalScore: 0},
	{Load: 0},
	{LoadSprite: 0},
	{Mute: 0},
	{Sound: 0},
	{PlaygamaBridge: 0},
	{Save: 0},
	{SaveButton: 0},
	{DeleteData: 0},
	{Delete: 0},
	{Pause: 0},
	{PauseText: 0},
	{Audio: 0},
	{Touch: 0},
	{Browser: 0},
	{Sprite11: 0},
	{PlatformInfo: 0},
	{Pin2: 0},
	{Platform: 0},
	{EnemyAnimations: 0},
	{dayTime: 0},
	{BestRecord: 0},
	{EnemyWaves: 0},
	{EnemyType: 0},
	{daysSurvived: 0},
	{isGameActive: 0},
	{totalScore: 0},
	{randFunction: 0},
	{itemsCollected: 0},
	{lastEnemyY: 0},
	{lastEnemyX: 0},
	{PrevPosition: 0},
	{GunSpeed: 0},
	{EnemyMulti: 0},
	{test: 0},
	{SpawnEnemyMulti: 0},
	{GamePaused: 0},
	{EnemySpeedMulti: 0},
	{dropRoll: 0},
	{damage: 0},
	{enemyUID: 0},
	{Sunset: 0},
	{damageAmount: 0},
	{enemyX: 0},
	{enemyY: 0}
];

self.InstanceType = {
	BackgroundTileMap: class extends self.ITilemapInstance {},
	ForegroundObjectsTileMap: class extends self.ITilemapInstance {},
	Middle: class extends self.ITilemapInstance {},
	Obstacles: class extends self.ITilemapInstance {},
	bat: class extends self.ISpriteInstance {},
	drag: class extends self.ISpriteInstance {},
	EnemyCollision: class extends self.ISpriteInstance {},
	EnemySpawnPoint: class extends self.ISpriteInstance {},
	bluebat: class extends self.ISpriteInstance {},
	fly: class extends self.ISpriteInstance {},
	VampireBoss: class extends self.ISpriteInstance {},
	AdultRed: class extends self.ISpriteInstance {},
	Ronin: class extends self.ISpriteInstance {},
	Tengu: class extends self.ISpriteInstance {},
	Oni: class extends self.ISpriteInstance {},
	Kappa: class extends self.ISpriteInstance {},
	Skelton: class extends self.ISpriteInstance {},
	Cyclops: class extends self.ISpriteInstance {},
	Goblin: class extends self.ISpriteInstance {},
	Ogre: class extends self.ISpriteInstance {},
	Grif: class extends self.ISpriteInstance {},
	Pala: class extends self.ISpriteInstance {},
	Demon: class extends self.ISpriteInstance {},
	Genie: class extends self.ISpriteInstance {},
	Gog: class extends self.ISpriteInstance {},
	Hell: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	PlayerCollision: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Bullet: class extends self.ISpriteInstance {},
	Gun1: class extends self.ISpriteInstance {},
	Night: class extends self.ISpriteInstance {},
	GameOverFAde: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Down: class extends self.ISpriteInstance {},
	Up: class extends self.ISpriteInstance {},
	RightC: class extends self.ISpriteInstance {},
	LeftC: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	SpriteFont2: class extends self.ISpriteFontInstance {},
	health: class extends self.ISpriteInstance {},
	Death: class extends self.ISpriteInstance {},
	PlayerSpeed: class extends self.ISpriteInstance {},
	BulletSpeed: class extends self.ISpriteInstance {},
	EnemySpeed: class extends self.ISpriteInstance {},
	EnemyHealth: class extends self.ISpriteInstance {},
	enemyHealthIncrease: class extends self.ISpriteInstance {},
	EnemyDown: class extends self.ISpriteInstance {},
	bulletUp: class extends self.ISpriteInstance {},
	Bounce: class extends self.ISpriteInstance {},
	bonus: class extends self.ISpriteInstance {},
	negBonus: class extends self.ISpriteInstance {},
	mystery: class extends self.ISpriteInstance {},
	SpawnSlow: class extends self.ISpriteInstance {},
	SlowSpeed: class extends self.ISpriteInstance {},
	enemyExp: class extends self.ISpriteInstance {},
	BestRecordText: class extends self.ISpriteFontInstance {},
	DaysSurvived: class extends self.ITextInstance {},
	DaysSurvivedText: class extends self.ISpriteFontInstance {},
	DaysSurvivedText10: class extends self.ISpriteFontInstance {},
	DaysSurvivedText11: class extends self.ISpriteFontInstance {},
	DaysSurvivedText12: class extends self.ISpriteFontInstance {},
	DaysSurvivedText13: class extends self.ISpriteFontInstance {},
	DaysSurvivedText14: class extends self.ISpriteFontInstance {},
	DaysSurvivedText15: class extends self.ISpriteFontInstance {},
	DaysSurvivedText16: class extends self.ISpriteFontInstance {},
	DaysSurvivedText2: class extends self.ISpriteFontInstance {},
	DaysSurvivedText3: class extends self.ISpriteFontInstance {},
	DaysSurvivedText4: class extends self.ISpriteFontInstance {},
	DaysSurvivedText5: class extends self.ISpriteFontInstance {},
	DaysSurvivedText6: class extends self.ISpriteFontInstance {},
	DaysSurvivedText7: class extends self.ISpriteFontInstance {},
	DaysSurvivedText8: class extends self.ISpriteFontInstance {},
	DaysSurvivedText9: class extends self.ISpriteFontInstance {},
	ItemMulti: class extends self.ITextInstance {},
	PlayerHealth: class extends self.ITextInstance {},
	TotalScore: class extends self.ITextInstance {},
	Load: class extends self.ITextInstance {},
	LoadSprite: class extends self.ISpriteInstance {},
	Mute: class extends self.ISpriteInstance {},
	Sound: class extends self.ITextInstance {},
	PlaygamaBridge: class extends self.C3.Plugins.PlaygamaBridge.Instance {},
	Save: class extends self.ITextInstance {},
	SaveButton: class extends self.ISpriteInstance {},
	DeleteData: class extends self.ISpriteInstance {},
	Delete: class extends self.ITextInstance {},
	Pause: class extends self.ISpriteInstance {},
	PauseText: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	PlatformInfo: class extends self.IInstance {},
	EnemyAnimations: class extends self.ISpriteInstance {}
}