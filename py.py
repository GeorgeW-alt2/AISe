import random
import os
import time

class PhilosophyGenerator:
    def __init__(self):
        self.output = ""
        self.update = "begin program: "
        self.sentence1 = ""
        self.sentence2 = ""
        self.sentence = ""
        self.filesave = ""
        self.running = True

    def read_file(self, filename):
        """Read content from a file with UTF-8 encoding and fallback handling."""
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                return file.read()
        except UnicodeDecodeError:
            try:
                with open(filename, 'r', encoding='utf-8', errors='ignore') as file:
                    return file.read()
            except Exception as e:
                print(f"Error reading file {filename}: {e}")
                return ""
        except FileNotFoundError:
            print(f"Error: File {filename} not found")
            return ""

    def write_file(self, filename, content, mode='w'):
        """Write content to a file."""
        try:
            with open(filename, mode) as file:
                file.write(content)
        except Exception as e:
            print(f"Error writing to file: {e}")
    
    def write_file_a(self, filename, content, mode='a'):
        """Write content to a file."""
        try:
            with open(filename, mode) as file:
                file.write(content)
        except Exception as e:
            print(f"Error writing to file: {e}")
    def process_word_category(self, sentence, category_file):
        """Process words based on their category (noun, verb, adj)."""
        if not sentence:
            return False
            
        words = sentence.split()
        txt = self.read_file(category_file)
        if not txt:
            return False
            
        vocab = txt.split('\n')
        
        for word in words:
            if word in vocab and word not in self.output:
                self.output += word + " "
                if category_file.endswith('adj.txt'):
                    self.update = word
                print(self.output, end='\r')
                return True
        return False

    def process_functions(self, sentences, x, filename):
        """Process function-related text."""
        if not sentences:
            return x
            
        q = 0
        func = self.read_file(filename)
        if not func:
            return x
            
        function_order = func.split('\n')
        
        for _ in range(len(sentences)):
            c = random.randint(0, len(sentences) - 1)
            if c >= len(sentences):
                continue
            sent = sentences[c]
            
            for func_word in function_order:
                if func_word and func_word in sent:
                    if q == 0:
                        if filename == 'parameters.txt' and len(self.update) > 1:
                            updater = self.read_file('parameters.txt')

                    q = 1
                    return c
        return x

    def generate_text(self):
        """Main text generation loop."""
        print("Starting text generation... Press Ctrl+C to stop")
        try:
            while self.running:
                self.output = ""
                txt = self.read_file('philosophy.txt')
                if not txt:
                    return
                    
                sentences = txt.split('.')
                x = 0

                for _ in range(len(sentences)):
                    terminator = self.output.split()
                    if len(terminator) > 16:
                        self.filesave += self.output + "\n"
                        self.write_file('output.txt', self.filesave)
                        print("\n" + self.output)
                        self.output = ""
                        break

                    # Process parameters
                    x = self.process_functions(sentences, x, 'parameters.txt')
                    
                    # Process nouns
                    if x < len(sentences):
                        self.process_word_category(sentences[x], 'noun.txt')
                    
                    # Process verbs
                    if x < len(sentences):
                        self.process_word_category(sentences[x], 'verb.txt')
                    
                    # Process functions
                    x = self.process_functions(sentences, x, 'function.txt')
                    
                    # Process extroversion
                    x = self.process_functions(sentences, x, 'extroversion.txt')
                    
                    # Process adjectives
                    for _ in range(len(sentences)):
                        y = random.randint(0, len(sentences) - 1)
                        if self.process_word_category(sentences[y], 'adj.txt'):
                            break

                    # Final function processing
                    x = self.process_functions(sentences, x, 'function.txt')
                    if x < len(sentences):
                        self.output += ".\n"
                        output_words = self.output.split()
                        str_list = "\n".join(output_words)
                        self.write_file_a('function.txt', str_list)

                #time.sleep(0.1)  # Small delay to prevent CPU overuse

        except KeyboardInterrupt:
            print("\nStopping text generation...")
            self.running = False

if __name__ == "__main__":
    generator = PhilosophyGenerator()
    generator.generate_text()
