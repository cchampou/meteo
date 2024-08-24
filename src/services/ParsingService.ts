class ParsingService {
  public static splitLines(text: string): string[] {
    return text.split("\n")
  }

  public static splitColumns(text: string): string[] {
    return text.split(",")
  }
}

export default ParsingService