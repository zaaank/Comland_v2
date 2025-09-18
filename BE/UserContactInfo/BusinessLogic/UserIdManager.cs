namespace UserContactInfo.BusinessLogic
{
    public class UserIdManager
    {
        private static int _lastUserId = 0;

        public int GetNextUserId()
        {
            _lastUserId++;
            return _lastUserId;
        }
    }
}
