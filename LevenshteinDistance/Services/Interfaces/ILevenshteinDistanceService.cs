namespace LevenshteinDistance.Services
{
    public interface ILevenshteinDistanceService
    {
        (int[,], int) GetLevenshteinDistance(string string1, string string2);
    }
}
