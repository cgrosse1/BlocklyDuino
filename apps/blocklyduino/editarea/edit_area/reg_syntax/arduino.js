editAreaLoader.load_syntax["arduino"] = {
	'DISPLAY_NAME' : 'arduino'
	,'COMMENT_SINGLE' : {1 : '//'}
	,'COMMENT_MULTI' : {'/*' : '*/'}
	,'QUOTEMARKS' : {1: "'", 2: '"'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
		'constants' : [
			'NULL', 'stdin', 'stdout', 'stderr','true', 'false' ,'OUTPUT', 'INPUT', 'INPUT_PULLUP', 'HIGH', 'LOW','DEC', 'BIN', 'HEX', 'OCT', 'PI', 'HALF_PI', 'TWO_PI', 'LSBFIRST', 'MSBFIRST'
			,'CHANGE', 'FALLING', 'RISING', 'DEFAULT', 'EXTERNAL', 'INTERNAL', 'INTERNAL1V1', 'INTERNAL2V56','class', 'new', 'private', 'protected','public'
		]
		,'words1' : [
			'using',
			'typeid', 'and', 'not', 'or', 'xor', 'pinMode', 'analogRead', 'analogWrite', 'digitalWrite', 'digitalRead', 'delay', 'delayMicroseconds', 'map'
			,'millis', 'micros', 'analogReference', 'tone', 'noTone', 'shiftOut', 'shiftIn', 'pulseIn', 'min'
			,'max', 'abs', 'constrain', 'pow', 'sqrt', 'sin', 'cos', 'tan', 'randomSeed', 'random', 'lowByte', 'highByte', 'bitRead', 'bitWrite', 'bitSet', 'bitClear'
			,'bit', 'detachInterrupt', 'attachInterrupt', 'noInterrupts', 'interrupts'  
			,'acos', 'asin', 'atan', 'atan2', 'ceil', 'degrees', 'exp', 'floor', 'log', 'radians', 'round', 'sq'
		]
		,'types' : [
			'FILE', 'auto', 'char', 'const', 'double',
			'extern', 'float', 'inline', 'int', 'long', 'register',
			'short', 'signed', 'size_t', 'static', 'struct',
			'time_t', 'typedef', 'union', 'unsigned', 'void',
			'volatile'
		]
		,'statements' : [
			'do', 'else', 'enum', 'for', 'goto', 'if', 'sizeof','switch', 'while','this', 'throw', 'try'
		]
 		,'keywords' : [
			'break', 'case', 'continue', 'default', 'delete',
			'return'
		]
	}
	,'OPERATORS' :[
		'+', '-', '/', '*', '=', '<', '>', '%', '!', '?', ':', '&'
	]
	,'DELIMITERS' :[
		'(', ')', '[', ']', '{', '}'
	]
	,'REGEXPS' : {
		'precompiler' : {
			'search' : '()(#[^\r\n]*)()'
			,'class' : 'precompiler'
			,'modifiers' : 'g'
			,'execute' : 'before'
		}
/*		,'precompilerstring' : {
			'search' : '(#[\t ]*include[\t ]*)([^\r\n]*)([^\r\n]*[\r\n])'
			,'class' : 'precompilerstring'
			,'modifiers' : 'g'
			,'execute' : 'before'
		}*/
	}
	,'STYLES' : {
		'COMMENTS': 'color: #AAAAAA;'
		,'QUOTESMARKS': 'color: #6381F8;'
		,'KEYWORDS' : {
			'constants' : 'color: #EE0000;'
			,'words1': 'color: #FF8000;'
			,'types' : 'color: #8000FF;'
			,'statements' : 'color: #0000FF;'
			,'keywords' : 'color: #48BDDF;'
		}
		,'OPERATORS' : 'color: #FF00FF;'
		,'DELIMITERS' : 'color: #0038E1;'
		,'REGEXPS' : {
			'precompiler' : 'color: #009900;'
			,'precompilerstring' : 'color: #994400;'
		}
	}
};
