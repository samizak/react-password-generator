export class GeneratePassword {
  private characters: string = "";

  Create(passwordSettings: any) {
    const chars = this.GetPossibleCharacters(passwordSettings);

    if (chars === "") return "";

    const GetRandomItem = (arr: any) =>
      arr[Math.floor(Math.random() * arr.length)];

    let password = "";
    for (let i = 0; i < passwordSettings.passwordLength; i++) {
      password += GetRandomItem(chars);
    }

    return password;
  }

  private GetPossibleCharacters(passwordSettings: any) {
    if (passwordSettings.useLowerCase)
      this.characters += this.GetLowerCaseLetters();

    if (passwordSettings.useUpperCase)
      this.characters += this.GetUpperCaseLetters();

    if (passwordSettings.useNumbers) this.characters += this.GetNumbers();

    if (passwordSettings.useSymbols) this.characters += this.GetSymbols();

    return this.characters;
  }

  private GetLowerCaseLetters = () => "abcdefghijklmnopqrstuvwxyz";
  private GetUpperCaseLetters = () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private GetNumbers = () => "0123456789";
  private GetSymbols = () => "@!$%&*#^()";
}
