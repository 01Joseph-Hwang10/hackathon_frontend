
def indent(string:str = "", space:float = 0) -> str:
    return " " * space + string

def to_camel_case(string:str, upper=False):
    wordset = string.split(' ')
    if len(wordset) == 1:
        wordset = string.split('_')
    if len(wordset) == 1:
        wordset = string.split('-')
    words = []
    for i in range(len(wordset)):
        if not upper and i == 0:
            words.append(wordset[i])
            continue
        words.append(wordset[i].capitalize())
    return ''.join(words)