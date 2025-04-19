
ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting("immersive_aircraft:sail",
		[
			" SS ",
			"SFFS",
			" SS "
		],
		{
		"S": "create:white_sail",
		"F": "create:sail_frame"
		}
		)
	event.recipes.create.sequenced_assembly(
		['immersive_aircraft:boiler'],
		'create:copper_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_boiler', ['kubejs:uncomplete_boiler', 'create:blaze_burner']),
		event.recipes.createDeploying('kubejs:uncomplete_boiler', ['kubejs:uncomplete_boiler', 'create:fluid_tank']),
		event.recipes.createDeploying('kubejs:uncomplete_boiler', ['kubejs:uncomplete_boiler', 'create:steam_engine']),
		event.recipes.createDeploying('kubejs:uncomplete_boiler', ['kubejs:uncomplete_boiler', 'create:copper_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_boiler', 'kubejs:uncomplete_boiler')
		
		]
		).transitionalItem('kubejs:uncomplete_boiler').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:bomb_bay'],
		'create:iron_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_bomb_bay', ['kubejs:uncomplete_bomb_bay', 'minecraft:dispenser']),
		event.recipes.createDeploying('kubejs:uncomplete_bomb_bay', ['kubejs:uncomplete_bomb_bay', 'minecraft:repeater']),
		event.recipes.createDeploying('kubejs:uncomplete_bomb_bay', ['kubejs:uncomplete_bomb_bay', 'minecraft:tnt']),
		event.recipes.createDeploying('kubejs:uncomplete_bomb_bay', ['kubejs:uncomplete_bomb_bay', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_bomb_bay', 'kubejs:uncomplete_bomb_bay')
		
		]
		).transitionalItem('kubejs:uncomplete_bomb_bay').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:eco_engine'],
		'immersive_aircraft:boiler',
		[
		event.recipes.createDeploying('kubejs:uncomplete_eco_engine', ['kubejs:uncomplete_eco_engine', 'create:copper_sheet']),
		event.recipes.createFilling('kubejs:uncomplete_eco_engine', ['kubejs:uncomplete_eco_engine', Fluid.water(1000)]),
		event.recipes.createDeploying('kubejs:uncomplete_eco_engine', ['kubejs:uncomplete_eco_engine', 'create:copper_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_eco_engine', ['kubejs:uncomplete_eco_engine', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_eco_engine', 'kubejs:uncomplete_eco_engine')
		
		]
		).transitionalItem('kubejs:uncomplete_eco_engine').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:engine'],
		'immersive_aircraft:boiler',
		[
		event.recipes.createDeploying('kubejs:uncomplete_engine', ['kubejs:uncomplete_engine', 'create:sturdy_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_engine', ['kubejs:uncomplete_engine', 'create:precision_mechanism']),
		event.recipes.createDeploying('kubejs:uncomplete_engine', ['kubejs:uncomplete_engine', 'create:sturdy_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_engine', ['kubejs:uncomplete_engine', 'create:brass_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_engine', 'kubejs:uncomplete_engine')
		
		]
		).transitionalItem('kubejs:uncomplete_engine').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:enhanced_propeller'],
		'create:propeller',
		[
		event.recipes.createDeploying('kubejs:uncomplete_enhanced_propeller', ['kubejs:uncomplete_enhanced_propeller', 'create:brass_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_enhanced_propeller', ['kubejs:uncomplete_enhanced_propeller', 'create:brass_nugget']),
		event.recipes.createDeploying('kubejs:uncomplete_enhanced_propeller', ['kubejs:uncomplete_enhanced_propeller', 'create:brass_sheet'])
		
		]
		).transitionalItem('kubejs:uncomplete_enhanced_propeller').loops('2')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:gyroscope'],
		'minecraft:compass',
		[
		event.recipes.createDeploying('kubejs:uncomplete_gyroscope', ['kubejs:uncomplete_gyroscope', 'create:electron_tube']),
		event.recipes.createDeploying('kubejs:uncomplete_gyroscope', ['kubejs:uncomplete_gyroscope', 'create:electron_tube']),
		event.recipes.createDeploying('kubejs:uncomplete_gyroscope', ['kubejs:uncomplete_gyroscope', 'minecraft:iron_nugget'])
		
		]
		).transitionalItem('kubejs:uncomplete_gyroscope').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:heavy_crossbow'],
		'minecraft:crossbow',
		[
		event.recipes.createDeploying('kubejs:uncomplete_heavy_crossbow', ['kubejs:uncomplete_heavy_crossbow', '#minecraft:logs']),
		event.recipes.createDeploying('kubejs:uncomplete_heavy_crossbow', ['kubejs:uncomplete_heavy_crossbow', 'minecraft:tripwire_hook']),
		event.recipes.createDeploying('kubejs:uncomplete_heavy_crossbow', ['kubejs:uncomplete_heavy_crossbow', 'minecraft:iron_nugget'])
		
		]
		).transitionalItem('kubejs:uncomplete_heavy_crossbow').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:hull'],
		'create:iron_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_hull', ['kubejs:uncomplete_hull', 'create:andesite_casing']),
		event.recipes.createPressing('kubejs:uncomplete_hull', 'kubejs:uncomplete_hull'),
		event.recipes.createDeploying('kubejs:uncomplete_hull', ['kubejs:uncomplete_hull', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_hull', 'kubejs:uncomplete_hull')
		
		]
		).transitionalItem('kubejs:uncomplete_hull').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:improved_landing_gear'],
		'create:belt_connector',
		[
		event.recipes.createDeploying('kubejs:uncomplete_improved_landing_gear', ['kubejs:uncomplete_improved_landing_gear', 'create:iron_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_improved_landing_gear', ['kubejs:uncomplete_improved_landing_gear', 'minecraft:iron_ingot']),
		event.recipes.createDeploying('kubejs:uncomplete_improved_landing_gear', ['kubejs:uncomplete_improved_landing_gear', 'minecraft:iron_nugget'])
		
		]
		).transitionalItem('kubejs:uncomplete_improved_landing_gear').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:industrial_gears'],
		'create:copper_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_industrial_gears', ['kubejs:uncomplete_industrial_gears', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_industrial_gears', 'kubejs:uncomplete_industrial_gears')
		
		]
		).transitionalItem('kubejs:uncomplete_industrial_gears').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:nether_engine'],
		'immersive_aircraft:boiler',
		[
		event.recipes.createDeploying('kubejs:uncomplete_nether_engine', ['kubejs:uncomplete_nether_engine', 'minecraft:netherite_ingot']),
		event.recipes.createFilling('kubejs:uncomplete_nether_engine', ['kubejs:uncomplete_nether_engine', Fluid.lava(1000)]),
		event.recipes.createDeploying('kubejs:uncomplete_nether_engine', ['kubejs:uncomplete_nether_engine', 'create:sturdy_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_nether_engine', ['kubejs:uncomplete_nether_engine', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_nether_engine', 'kubejs:uncomplete_nether_engine')
		
		]
		).transitionalItem('kubejs:uncomplete_nether_engine').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:propeller'],
		'create:propeller',
		[
		event.recipes.createDeploying('kubejs:uncomplete_propeller', ['kubejs:uncomplete_propeller', 'create:iron_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_propeller', ['kubejs:uncomplete_propeller', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_propeller', 'kubejs:uncomplete_propeller')
		
		]
		).transitionalItem('kubejs:uncomplete_propeller').loops('2')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:hull_reinforcement'],
		'immersive_aircraft:hull',
		[
		event.recipes.createDeploying('kubejs:uncomplete_hull_reinforcement', ['kubejs:uncomplete_hull_reinforcement', 'create:iron_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_hull_reinforcement', ['kubejs:uncomplete_hull_reinforcement', 'minecraft:iron_nugget']),
		event.recipes.createPressing('kubejs:uncomplete_hull_reinforcement', 'kubejs:uncomplete_hull_reinforcement')
		
		]
		).transitionalItem('kubejs:uncomplete_hull_reinforcement').loops('2')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:rotary_cannon'],
		'create:copper_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_rotary_cannon', ['kubejs:uncomplete_rotary_cannon', 'immersive_aircraft:industrial_gears']),
		event.recipes.createDeploying('kubejs:uncomplete_rotary_cannon', ['kubejs:uncomplete_rotary_cannon', 'minecraft:dispenser']),
		event.recipes.createDeploying('kubejs:uncomplete_rotary_cannon', ['kubejs:uncomplete_rotary_cannon', 'immersive_aircraft:industrial_gears']),
		event.recipes.createDeploying('kubejs:uncomplete_rotary_cannon', ['kubejs:uncomplete_rotary_cannon', 'minecraft:iron_ingot']),
		event.recipes.createPressing('kubejs:uncomplete_rotary_cannon', 'kubejs:uncomplete_rotary_cannon')
		
		]
		).transitionalItem('kubejs:uncomplete_rotary_cannon').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:steel_boiler'],
		'immersive_aircraft:boiler',
		[
		event.recipes.createDeploying('kubejs:uncomplete_steel_boiler', ['kubejs:uncomplete_steel_boiler', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_steel_boiler', 'kubejs:uncomplete_steel_boiler'),
		event.recipes.createDeploying('kubejs:uncomplete_steel_boiler', ['kubejs:uncomplete_steel_boiler', 'create:sturdy_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_steel_boiler', 'kubejs:uncomplete_steel_boiler')
		
		]
		).transitionalItem('kubejs:uncomplete_steel_boiler').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:sturdy_pipes'],
		'create:iron_sheet',
		[
		event.recipes.createDeploying('kubejs:uncomplete_sturdy_pipes', ['kubejs:uncomplete_sturdy_pipes', 'create:fluid_pipe']),
		event.recipes.createPressing('kubejs:uncomplete_sturdy_pipes', 'kubejs:uncomplete_sturdy_pipes'),
		event.recipes.createDeploying('kubejs:uncomplete_sturdy_pipes', ['kubejs:uncomplete_sturdy_pipes', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:uncomplete_sturdy_pipes', 'kubejs:uncomplete_sturdy_pipes')
		
		]
		).transitionalItem('kubejs:uncomplete_sturdy_pipes').loops('1')
		event.recipes.create.sequenced_assembly(
		['immersive_aircraft:telescope'],
		'minecraft:spyglass',
		[
		event.recipes.createDeploying('kubejs:uncomplete_telescope', ['kubejs:uncomplete_telescope', 'minecraft:glass_pane']),
		event.recipes.createDeploying('kubejs:uncomplete_telescope', ['kubejs:uncomplete_telescope', 'create:copper_sheet']),
		event.recipes.createDeploying('kubejs:uncomplete_telescope', ['kubejs:uncomplete_telescope', 'create:cogwheel'])
		
		]
		).transitionalItem('kubejs:uncomplete_telescope').loops('1')

	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:boiler"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:bomb_bay"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:eco_engine"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:engine"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:enhanced_propeller"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:gyroscope"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:heavy_crossbow"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:hull"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:improved_landing_gear"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:industrial_gears"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:nether_engine"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:propeller"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:hull_reinforcement"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:rotary_cannon"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:steel_boiler"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:sturdy_pipes"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:telescope"})
	event.remove({type: "minecraft:crafting_shaped",output: "immersive_aircraft:sail"})
		
	}
)
